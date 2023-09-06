DROP DATABASE IF EXISTS logisticaCom;
CREATE DATABASE logisticaCom
USE logisticaCom;

CREATE TABLE Roles (
    RolId int PRIMARY KEY,
    Descripcion varchar(128)
);

INSERT INTO Roles VALUES (1,'Administracion');
INSERT INTO Roles VALUES (2,'Caja');


CREATE TABLE Usuarios (
    UsuarioId int IDENTITY(1,1) PRIMARY KEY,
    Nombre varchar(128),
	Username varchar(128) UNIQUE,
    Password BINARY(64),
	RolId int FOREIGN KEY REFERENCES Roles(RolId)
);



CREATE TABLE TextosCambios (
    TextoId int IDENTITY(1,1) PRIMARY KEY,
    Texto varchar(128)
);
--Se deben insertar estos y ningun otro, esta tabla es estatica, por el momento son ejemplos
INSERT INTO TextosCambios VALUES ('Se cambio el precio interno de ...');
INSERT INTO TextosCambios VALUES ('Se cambio el precio externo de ...');

CREATE TABLE Cambios (
    TextoId int FOREIGN KEY REFERENCES TextosCambios(TextoId),
    UsuarioId int FOREIGN KEY REFERENCES Usuarios(UsuarioId)
);



CREATE TABLE Platillos (
    PlatilloId int IDENTITY(1,1) PRIMARY KEY,
Nombre Varchar(100),
    PrecioInterno int,
    PrecioExterno int,
	Fav BIT,
	ImgPath nvarchar(260)
);

CREATE TABLE Ventas (
    VentaId int IDENTITY(1,1) PRIMARY KEY,
	UsuarioId int FOREIGN KEY REFERENCES Usuarios(UsuarioId),
    Total int,
);

CREATE TABLE PlatillosVendidos (
    VentaId int FOREIGN KEY REFERENCES Ventas(VentaId),
	PlatilloId int FOREIGN KEY REFERENCES Platillos(PlatilloId),
	Cantidad int
);

--Se deben insertar estos y ningun otro, esta tabla es estatica
CREATE TABLE Dias (
	DiaID int PRIMARY KEY,
	Nombre varchar(20)
);
INSERT INTO Dias VALUES (1,'Domingo');
INSERT INTO Dias VALUES (2,'Lunes');
INSERT INTO Dias VALUES (3,'Martes');
INSERT INTO Dias VALUES (4,'Miercoles');
INSERT INTO Dias VALUES (5,'Jueves');
INSERT INTO Dias VALUES (6,'Viernes');
INSERT INTO Dias VALUES (7,'Sabado');



CREATE TABLE TiemposComida (
	TiempoID int PRIMARY KEY,
	Nombre varchar(20)
);
--Se deben insertar estos y ningun otro, esta tabla es estatica
INSERT INTO TiemposComida VALUES (1,'Desayuno');
INSERT INTO TiemposComida VALUES (2,'Almuerzo');
INSERT INTO TiemposComida VALUES (3,'Cafe');
INSERT INTO TiemposComida VALUES (4,'Cena');


CREATE TABLE PlatillosTiemposComidaTag (
	PlatilloId int FOREIGN KEY REFERENCES Platillos(PlatilloId),
	TiempoID int FOREIGN KEY REFERENCES TiemposComida(TiempoID)	
);


CREATE TABLE MenusSemanales (
    MenuSemanal int IDENTITY(1,1) PRIMARY KEY
);

CREATE TABLE Eventos (
    Evento int IDENTITY(1,1) PRIMARY KEY,
	MenuSemanal int FOREIGN KEY REFERENCES MenusSemanales(MenuSemanal),
    DiaID int FOREIGN KEY REFERENCES Dias(DiaID),
    TiempoID int FOREIGN KEY REFERENCES TiemposComida(TiempoID)
);

CREATE TABLE PlatillosMenu (
    PlatilloMenuId int IDENTITY(1,1) PRIMARY KEY,
    PlatilloId int FOREIGN KEY REFERENCES Platillos(PlatilloId),
    Evento int FOREIGN KEY REFERENCES Eventos(Evento)
);