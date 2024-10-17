const budgetFormValidator = async (req, res, next) => {
  const formData = req.body;
  //   const specialCharacters = /[^a-zA-Z0-9 ]/g;

  try {
    if (formData.name.length > 100) {
      throw new Error("Nom trop long : maximum 100 caractères.");
    }

    // if (formData.name.match(specialCharacters)) {
    //   return res.json({
    //     message: "Seulement les caractères alphanumériques sont autorisés.",
    //   });
    // }

    // if (
    //   !Number.isInteger(Number(formData.amount)) ||
    //   Number(formData.amount) < 0
    // ) {
    //   return res.json({
    //     message: "Seul les nombres entiers positifs sont acceptés.",
    //   });
    // }

    return next();
  } catch (error) {
    return res.json({ message: error.message });
  }
};

// {
//   name: "Bar",
//   amount: 300,
//   start_date: "2024-10-18",
//   end_date: "2024-10-18",
//   category_id: null,
//   user_id: 1,
// };

module.exports = {
  budgetFormValidator,
};
