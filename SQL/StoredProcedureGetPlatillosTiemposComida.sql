--Trae los platillos filtrados por id de tiempo de comida 1=desayuno,2=almuerzo,3=cafe o 4=cena 
CREATE PROCEDURE GetPlatillosTiemposComida
    @TiemposComida INT
AS
BEGIN
	SELECT * FROM Platillos
	INNER JOIN (PlatillosTiemposComidaTag INNER JOIN TiemposComida ON PlatillosTiemposComidaTag.TiempoID = TiemposComida.TiempoID)
	ON
    Platillos.PlatilloId = PlatillosTiemposComidaTag.PlatilloId
	Where PlatillosTiemposComidaTag.TiempoID = @TiemposComida
END;
-- Ejemplo de uso EXEC GetPlatillosTiemposComida @TiemposComida = 2; --Trae todos los platillos de 