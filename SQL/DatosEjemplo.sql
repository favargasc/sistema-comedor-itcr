--Platillos prueba

USE logisticaCom;

INSERT INTO Platillos VALUES ('Jugo de coliflor' ,52, 10, 1, 'myPATH');
INSERT INTO Platillos VALUES ('Jugo de naranaja' ,1, 4, 0, 'myPATH');
INSERT INTO Platillos VALUES ('Arroz' ,51, 11, 0, 'myPATH');
INSERT INTO Platillos VALUES ('Leche' ,2, 12, 9, 'myPATH');
INSERT INTO Platillos VALUES ('Arroz con leche' ,5, 17, 1, 'myPATH');
INSERT INTO Platillos VALUES ('Mango' ,11, 13, 1, 'myPATH');
INSERT INTO Platillos VALUES ('Arroz con mango' ,5, 16, 1, 'myPATH');
INSERT INTO Platillos VALUES ('Tacos' ,51, 14, 1, 'myPATH');
INSERT INTO Platillos VALUES ('Sopa de calamar' ,5, 15, 1, 'myPATH');


-- Se tagean los platillos por tiempo de comida (id de comida y id_tiempo de comida
INSERT INTO PlatillosTiemposComidaTag VALUES (1,1);
INSERT INTO PlatillosTiemposComidaTag VALUES (1,2);
INSERT INTO PlatillosTiemposComidaTag VALUES (2,2);
INSERT INTO PlatillosTiemposComidaTag VALUES (3,1);
INSERT INTO PlatillosTiemposComidaTag VALUES (3,2);
INSERT INTO PlatillosTiemposComidaTag VALUES (4,3);
INSERT INTO PlatillosTiemposComidaTag VALUES (4,2);
INSERT INTO PlatillosTiemposComidaTag VALUES (5,1);
INSERT INTO PlatillosTiemposComidaTag VALUES (6,1);

--Insert users
INSERT INTO Usuarios VALUES ('Juan','jj', HASHBYTES ( 'MD5', 'MyPass') , 1);
INSERT INTO Usuarios VALUES ('Pedro','prpr', HASHBYTES ( 'MD5', 'M') , 2);
INSERT INTO Usuarios VALUES ('Maria','mm', HASHBYTES ( 'MD5', 'My') , 1);
INSERT INTO Usuarios VALUES ('Patroclo','pp', HASHBYTES ( 'MD5', 'MyP') , 2);
INSERT INTO Usuarios VALUES ('David','dd', HASHBYTES ( 'MD5', 'MyPa') , 1);
INSERT INTO Usuarios VALUES ('Isabel','ii', HASHBYTES ( 'MD5', 'MyPas') , 2);
INSERT INTO Usuarios VALUES ('Nemo','nn', HASHBYTES ( 'MD5', 'MyPasss') , 1);
INSERT INTO Usuarios VALUES ('Fernando','ff', HASHBYTES ( 'MD5', 'MyPassss') , 2);
