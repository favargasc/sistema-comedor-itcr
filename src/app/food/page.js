"use client";

import styles from "@/styles/food/food.module.css";
import Navbar from "@/components/food/Navbar";
import { useEffect, useState } from "react";
import Sidebar from "@/components/food/Sidebar";
import ListFood from "@/components/food/ListFood";
import Modal from "@/components/modal/Modal";
import data from "../data/categories.json";

const InputField = ({ title, type }) => (
  <div className={styles["input-field"]}>
    <label>{title}</label>
    <input type={type} min="0" step="500" />
  </div>
);

const FileField = ({ title }) => (
  <div className={styles["file-field"]}>
    <label>{title}</label>
    <input type="file" id="food" name="food" accept=".jpg, .jpeg, .png" />
  </div>
);
const SelectField = ({ title }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <div className={styles["input-field"]}>
      <label>{title}</label>
      <select name="categories">
        {categories.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const AddModal = ({ isOpen, title, closeModal }) => (
  <Modal isOpen={isOpen} title={title} closeModal={closeModal}>
    <div className={styles["modal-container"]}>
      <InputField title={"Nombre del platillo"} type={"text"} />
      <SelectField title={"Categoría del platillo"} />
      <InputField title={"Precio interno"} type={"number"} />
      <InputField title={"Precio externo"} type={"number"} />
    </div>
    <FileField title={"Imagen del platillo"} />
  </Modal>
);

const EditModal = ({ isOpen, title, closeModal }) => (
  <Modal isOpen={isOpen} title={title} closeModal={closeModal}>
    <div className={styles["modal-container"]}>
      <InputField title={"Nombre del platillo"} type={"text"} />
      <SelectField title={"Categoría del platillo"} />
      <InputField title={"Precio interno"} type={"number"} />
      <InputField title={"Precio externo"} type={"number"} />
    </div>
    <FileField title={"Imagen del platillo"} />
  </Modal>
);

export default function FoodDashboard() {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  return (
    <>
      <AddModal
        isOpen={isOpenAddModal}
        title={"Añadir platillo"}
        closeModal={() => setIsOpenAddModal(false)}
      />
      <EditModal
        isOpen={isOpenEditModal}
        title={"Editar platillo"}
        closeModal={() => setIsOpenEditModal(false)}
      />
      <div className={styles.wrapper}>
        <Navbar />
        <Sidebar openModal={() => setIsOpenAddModal(true)} />
        <ListFood openModal={() => setIsOpenEditModal(true)} />
      </div>
    </>
  );
}
