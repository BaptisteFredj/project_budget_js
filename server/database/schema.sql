  create table user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    created_at DATE
  );

  create table account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    amount DECIMAL(10, 2) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id)
  );

  create table icon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
  );
   
  create table category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    icon_id INT NOT NULL,
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

INSERT INTO icon (name) VALUES 
    ('questionmark'),
    ('arrows1'),
    ('arrows2'),
    ('baby'),
    ('bar1'),
    ('bar2'),
    ('bitcoin'),
    ('cloth1'),
    ('cloth2'),
    ('controller'),
    ('dollar'),
    ('euro'),
    ('food1'),
    ('food2'),
    ('gift'),
    ('grocery1'),
    ('grocery2'),
    ('health1'),
    ('health2'),
    ('heart1'),
    ('home'),
    ('money1'),
    ('school'),
    ('sport1'),
    ('sport2'),
    ('transport'),
    ('yen');