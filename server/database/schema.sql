create table user (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    created_at DATE
  );
  
  INSERT INTO user (username, email, password, avatar, created_at) VALUES
  ('john_doe', 'john@example.com', 'password123', 'avatar1.png', '2023-01-15'),
  ('jane_smith', 'jane@example.com', 'securePass!', 'avatar2.png', '2023-02-10'),
  ('alice_jones', 'alice@example.com', 'alice2024', 'avatar3.png', '2023-03-20');
  
  
  create table category (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    icon VARCHAR(255),
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id)
  );
  
  INSERT INTO category (name, icon, user_id) VALUES
  ('Groceries', 'groceries_icon.png', 1),
  ('Rent', 'rent_icon.png', 1),
  ('Entertainment', 'entertainment_icon.png', 2),
  ('Utilities', 'utilities_icon.png', 2),
  ('Travel', 'travel_icon.png', 3);
  
  
  create table transaction (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    date DATE,
    amount INT,
    type VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
  );
  
  INSERT INTO transaction (name, date, amount, type, category_id) VALUES
  ('kebab', '2023-08-01', 50, 'expense', 1),
  ('mcdo', '2023-08-05', 1200, 'expense', 2),
  ('bk', '2023-08-12', 300, 'expense', 3),
  ('kfc', '2023-08-15', 80, 'expense', 4),
  ('dominos', '2023-08-20', 200, 'expense', 5),
  ('otacos', '2023-08-22', 1500, 'income', 2);
  
  
  create table budget (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    amount INT,
    start_date DATE,
    end_date DATE,
    category_id INT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
  );
  
  INSERT INTO budget (name, amount, start_date, end_date, category_id, user_id) VALUES
  ('course', 500, '2023-09-01', '2023-09-30', 1, 1),
  ('bar', 1500, '2023-09-01', '2023-09-30', 2, 1),
  ('vélo', 300, '2023-09-01', '2023-09-30', 3, 2),
  ('piscine', 400, '2023-09-01', '2023-09-30', 4, 2),
  ('restaurant', 1000, '2023-09-01', '2023-09-30', 5, 3);
  