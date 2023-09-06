--Trae los platillos filtrados por id de tiempo de comida 1=desayuno,2=almuerzo,3=cafe o 4=cena 
CREATE PROCEDURE CrearPlatillo
    @Nombre varchar(100),
	@PrecioI int,
	@PrecioE int,
	@Fav bit,
	@ImgPath nvarchar(260)
AS
BEGIN
	INSERT INTO Platillos VALUES (@Nombre ,@PrecioI, @PrecioE, @Fav, @ImgPath);
END;
