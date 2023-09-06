--Devuelve el ID del usuario, su username y su RolId si los datos coinciden
CREATE PROCEDURE Login
    @Username varchar(100),
	@Password varchar(100)
AS
BEGIN
	SELECT UsuarioId, Username, RolId FROM Usuarios where (Usuarios.Username = Username AND Usuarios.Password = HASHBYTES ( 'MD5', @Password));
END;

--Ejemplo de uso EXEC Login @Username = 'nn', @Password = 'MyPasss';