  create table user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    created_at DATE
  );
   
  create table category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    icon VARCHAR(255),
    user_id INT NOT NULL,
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