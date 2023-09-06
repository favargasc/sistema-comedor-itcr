CREATE PROCEDURE TagPlatilloTiempo
	@platilloId int,
	@tiempoId int
AS
BEGIN
	INSERT INTO PlatillosTiemposComidaTag VALUES (@platilloId ,@tiempoId);
END;
