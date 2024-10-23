  create table user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    created_at DATE
  );

  create table icon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    path VARCHAR(255)
  );
   
  create table category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    icon_id INT DEFAULT 1,
    user_id INT NOT NULL,
    FOREIGN KEY(icon_id) REFERENCES icon(id),
    FOREIGN KEY(user_id) REFERENCES user(id)
  );
  
  create table transaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    type VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    category_id INT,
    FOREIGN KEY(user_id) REFERENCES user(id),
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
  );
  
  create table budget (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    category_id INT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
  );

INSERT INTO icon (path) VALUES 
    ('/assets/icons/question.svg'),
    ('/assets/icons/arrows1.svg'),
    ('/assets/icons/arrows2.svg'),
    ('/assets/icons/baby.svg'),
    ('/assets/icons/bar1.svg'),
    ('/assets/icons/bar2.svg'),
    ('/assets/icons/bitcoin.svg'),
    ('/assets/icons/cloth1.svg'),
    ('/assets/icons/cloth2.svg'),
    ('/assets/icons/controller.svg'),
    ('/assets/icons/dollar.svg'),
    ('/assets/icons/euro.svg'),
    ('/assets/icons/filelist.txt'),
    ('/assets/icons/food1.svg'),
    ('/assets/icons/food2.svg'),
    ('/assets/icons/gift.svg'),
    ('/assets/icons/grocery1.svg'),
    ('/assets/icons/grocery2.svg'),
    ('/assets/icons/health1.svg'),
    ('/assets/icons/health2.svg'),
    ('/assets/icons/heart1.svg'),
    ('/assets/icons/home.svg'),
    ('/assets/icons/money1.svg'),
    ('/assets/icons/school.svg'),
    ('/assets/icons/sport1.svg'),
    ('/assets/icons/sport2.svg'),
    ('/assets/icons/transport.svg'),
    ('/assets/icons/yen.svg');