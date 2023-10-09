-- Insertar datos de prueba en la tabla Role
INSERT INTO "Role" (description) VALUES
  ('Admin'),
  ('User'),
  ('Manager');

-- Insertar datos de prueba en la tabla User
INSERT INTO "User" (full_name, username, password) VALUES
  ('John Doe', 'john_doe', 'hashed_password'),
  ('Jane Smith', 'jane_smith', 'hashed_password'),
  ('Bob Johnson', 'bob_johnson', 'hashed_password');

-- Insertar datos de prueba en la tabla WarningMessage
INSERT INTO "WarningMessage" (message) VALUES
  ('CUIDADO WEY'),
  ('AY NO!'),
  ('ALERTAAAA!');

-- Insertar datos de prueba en la tabla ChangeLog
INSERT INTO "ChangeLog" (user_id, warning_msg_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3);

-- Insertar datos de prueba en la tabla Dish
INSERT INTO "Dish" (name, internal_price, foreign_price, is_favorite, img_path) VALUES
  ('Sushi', 10.99, 15.99, false, '/sistema-comedor-itcr/SQL/sushi.jpg'),
  ('Pinto', 8.99, 12.99, true, '/sistema-comedor-itcr/SQL/pinto.jpg'),
  ('Pan', 12.99, 18.99, false, '/sistema-comedor-itcr/SQL/pan.jpeg');
  ('Piña', 12.99, 18.99, false, '/sistema-comedor-itcr/SQL/piña.jpeg');
  ('Café', 12.99, 18.99, true, '/sistema-comedor-itcr/SQL/cafe.jpeg');
  ('Plátano maduro', 12.99, 18.99, false, '/sistema-comedor-itcr/SQL/platanomaduro.jpeg');
  ('Sandía', 12.99, 18.99, false, '/sistema-comedor-itcr/SQL/sandia.jpeg');

-- Insertar datos de prueba en la tabla SaleLog
INSERT INTO "SaleLog" (user_id, total) VALUES
  (1, 50),
  (2, 75),
  (3, 100);

-- Insertar datos de prueba en la tabla SoldDishLog
INSERT INTO "SoldDishLog" (sale_id, dish_id, sold_dishes) VALUES
  (1, 1, 3),
  (1, 2, 2),
  (2, 3, 4);

-- Insertar datos de prueba en la tabla Day
INSERT INTO "Day" (name) VALUES
  ('Monday'),
  ('Tuesday'),
  ('Wednesday');
