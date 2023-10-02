const { sql, connectionString } = require("./db");

// Función para crear un usuario
function createUser() {
  const newUserData = {
    nombre: "Nuevo Usuario",
    username: "nuevoUsuario",
    password: "nuevaContraseña"
  };

  const insertQuery = `
    INSERT INTO dbo.Usuarios (Nombre, Username, Password)
    VALUES (?, ?, ?);
  `;

  sql.query(connectionString, insertQuery, [newUserData.nombre, newUserData.username, newUserData.password], (err, result) => {
    if (err) {
      console.error("Error al crear el usuario:", err);
    } else {
      console.log("Usuario creado con éxito.");
    }
  });
}

// Función para leer usuarios
function readUsers() {
  const selectQuery = "SELECT * FROM dbo.Usuarios";

  sql.query(connectionString, selectQuery, (err, rows) => {
    if (err) {
      console.error("Error al leer usuarios:", err);
    } else {
      console.log("Usuarios encontrados:", rows);
    }
  });
}

// Función para actualizar un usuario
function updateUser() {
  const updatedUserData = {
    id: 1, // ID del usuario a actualizar
    newNombre: "Nuevo Nombre Actualizado",
    newUsername: "nuevoUsuarioActualizado",
    newPassword: "nuevaContraseñaActualizada"
  };

  const updateQuery = `
    UPDATE dbo.Usuarios
    SET Nombre = ?,
        Username = ?,
        Password = ?
    WHERE UsuarioID = ?;
  `;

  sql.query(connectionString, updateQuery, [updatedUserData.newNombre, updatedUserData.newUsername, updatedUserData.newPassword, updatedUserData.id], (err, result) => {
    if (err) {
      console.error("Error al actualizar el usuario:", err);
    } else {
      console.log("Usuario actualizado con éxito.");
    }
  });
}

// Función para eliminar un usuario
function deleteUser() {
  const userIdToDelete = 1;

  const deleteQuery = "DELETE FROM dbo.Usuarios WHERE UsuarioID = ?";

  sql.query(connectionString, deleteQuery, [userIdToDelete], (err, result) => {
    if (err) {
      console.error("Error al eliminar el usuario:", err);
    } else {
      console.log("Usuario eliminado con éxito.");
    }
  });
}

module.exports = { createUser, readUsers, updateUser, deleteUser };
