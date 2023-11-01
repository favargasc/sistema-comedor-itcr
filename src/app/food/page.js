"use client";

import styles from "@/styles/food/food.module.css";
import Navbar from "@/components/food/Navbar";
import { useEffect, useState } from "react";
import Sidebar from "@/components/food/Sidebar";
import ListFood from "@/components/food/ListFood";
import Modal from "@/components/modal/Modal";
import data from "../data/categories.json";
import axios from "axios";
import TopBar from "@/components/topbar/Topbar";

const InputField = ({ title, type, name, value, handle }) => (
  <div className={styles["input-field"]}>
    <label>{title}</label>
    <input
      type={type}
      min="0"
      step="500"
      name={name}
      value={value}
      onChange={(e) => handle(e.target.value)}
    />
  </div>
);

const FileField = ({ title, name, value, handle }) => (
  <div className={styles["file-field"]}>
    <label>{title}</label>
    <input type="file" id="food" accept=".jpg, .jpeg, .png" />
  </div>
);
const SelectField = ({ title, handle, value }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <div className={styles["input-field"]}>
      <label>{title}</label>
      <select
        name="categories"
        onChange={(e) => handle(e.target.value)}
        value={value}
      >
        {categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const AddModal = ({ isOpen, title, closeModal, foodCounter }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [intern, setIntern] = useState(0);
  const [extern, setExtern] = useState(0);
  const [id_category, setIdCategory] = useState("1");
  const [name_category, setNameCategory] = useState("");

  useEffect(() => {
    const category = data.find(
      (category) => category.id.toString() === id_category
    );
    setNameCategory(category?.name);
    setId(foodCounter + 1);
  }, [foodCounter, id_category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const food = {
      id,
      name,
      img: "undefined",
      intern,
      extern,
      id_category,
      name_category,
    };

    console.log(food);

    await axios.post(
      "http://localhost:3000/api/temp/food",
      JSON.stringify(food)
    );

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      closeModal={closeModal}
      handle={handleSubmit}
    >
      <form onSubmit={handleSubmit}>
        <div className={styles["modal-container"]}>
          <InputField
            title={"Nombre del platillo"}
            type={"text"}
            value={name}
            handle={setName}
          />
          <SelectField
            title={"Categoría del platillo"}
            handle={setIdCategory}
            value={id_category}
          />
          <InputField
            title={"Precio interno"}
            type={"number"}
            value={intern}
            handle={setIntern}
          />
          <InputField
            title={"Precio externo"}
            type={"number"}
            value={extern}
            handle={setExtern}
          />
        </div>
        <FileField title={"Imagen del platillo"} />
      </form>
    </Modal>
  );
};

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
  const [foodCounter, setFoodCounter] = useState(0);
  return (
    <>
      <AddModal
        isOpen={isOpenAddModal}
        title={"Añadir platillo"}
        closeModal={() => setIsOpenAddModal(false)}
        foodCounter={foodCounter}
      />
      <EditModal
        isOpen={isOpenEditModal}
        title={"Editar platillo"}
        closeModal={() => setIsOpenEditModal(false)}
      />
      <div className={styles.wrapper}>
        <Navbar foodNumber={foodCounter} />
        <Sidebar openModal={() => setIsOpenAddModal(true)} />
        <ListFood
          setFoodCounter={setFoodCounter}
          openModal={() => setIsOpenEditModal(true)}
        />
      </div>
    </>
  );
}
