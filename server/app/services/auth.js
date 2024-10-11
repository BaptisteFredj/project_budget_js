const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// Options de hachage (voir documentation : https://github.com/ranisalt/node-argon2/wiki/Options)
// Recommandations **minimales** de l'OWASP : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);

    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashedPassword = hashedPassword;

    // Suppression du mot de passe non haché de la requête par mesure de sécurité
    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

const verifyToken = (req, res, next) => {
  try {
    // Search a key named auth in a key headers named "cookies" (with withCredentials when calling request)
    const { auth } = req.cookies;
    if (!auth) {
      throw new Error("No token found");
    }
    // Encrypted data is uncrypted with the key, then verified
    req.auth = jwt.verify(auth, process.env.APP_SECRET);
    req.body.user_id = req.auth.sub;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized: Invalid or missing token" });
  }
};

module.exports = {
  hashPassword,
  verifyToken,
};
