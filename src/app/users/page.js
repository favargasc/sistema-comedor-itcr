"use client";

import styles from "../../styles/users.module.css";
import Modal from "react-modal";
import { useState } from "react";
import data from "../data/users.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
  },
};

const Field = ({ message, method, value, name }) => {
  return (
    <div className={styles.field}>
      <label>{message}</label>
      <input value={value} onChange={method} name={name} />
    </div>
  );
};

const InputField = ({ field, method, value, name }) => {
  return (
    <div className={styles.field}>
      <label className={styles.input_fiel}>{field}: </label>
      <input
        className={styles.input_fiel}
        placeholder={"Ingrese su " + field}
        value={value}
        onChange={method}
        name={name}
      />
    </div>
  );
};
export default function Users() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      full_name: "Ana Smith",
      email: "ana.smith@example.com",
      username: "ana_smith123",
      password: "mypassword123",
    },
    {
      id: 2,
      full_name: "Carlos Rodríguez",
      email: "carlos.rodriguez@example.com",
      username: "carlos_rodriguez456",
      password: "securepass456",
    },
    {
      id: 3,
      full_name: "Elena López",
      email: "elena.lopez@example.com",
      username: "elena_lopez789",
      password: "strongpwd789",
    },
    {
      id: 4,
      full_name: "David Williams",
      email: "david.williams@example.com",
      username: "david_williams001",
      password: "password001",
    },
  ]);

  const [user, setUser] = useState({
    id: users.length + 1,
    full_name: "",
    email: "",
    username: "",
    password: "root",
  });

  const openModal = (id) => {
    const user_ = users.find((user) => user.id === id);

    setUser(user_);

    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handle_add_btn = () => {
    setUsers((users) => [...users, user]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteUser = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  const save_changes = (id) => {
    event.preventDefault();

    handleDeleteUser(id);
    handle_add_btn();

    closeModal();
  };

  return (
    <>
      <div>
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={styles.title}>Editar usuario</div>
          <form>
            <Field
              message={"nombre"}
              method={handleInputChange}
              value={user.full_name}
              name={"full_name"}
            />
            <Field
              message={"email"}
              method={handleInputChange}
              value={user.email}
              name={"email"}
            />
            <Field
              message={"usuario"}
              method={handleInputChange}
              value={user.username}
              name={"username"}
            />
            <Field
              message={"contraseña"}
              method={handleInputChange}
              value={user.password}
              name={"password"}
            />
            <div className={styles.btn_ctrl}>
              <button
                className={styles.btn_modify}
                onClick={() => save_changes(user.id)}
              >
                Modificar
              </button>
              <button className={styles.btn_delete} onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div className={styles.wrapper}>
        <InputField
          field={"nombre"}
          method={handleInputChange}
          value={user.full_name}
          name={"full_name"}
        />
        <InputField
          field={"email"}
          method={handleInputChange}
          value={user.email}
          name={"email"}
        />
        <InputField
          field={"usuario"}
          method={handleInputChange}
          value={user.username}
          name={"username"}
        />
        <InputField
          field={"contraseña"}
          method={handleInputChange}
          value={user.password}
          name={"password"}
        />
        <button className={styles.add_btn} onClick={handle_add_btn}>
          Agregar usuario
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>nombre completo</th>
            <th>correo electrónico</th>
            <th>usuario</th>
            <th>contraseña</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className={styles.btn_edit}
                    onClick={() => openModal(user.id)}
                  >
                    Modificar
                  </button>
                  <button
                    className={styles.btn_remove}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
