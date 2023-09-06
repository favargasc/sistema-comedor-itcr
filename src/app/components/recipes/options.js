'use client'

import Image from 'next/image'

import React, {useState} from "react";
import styles from "./options.module.css";
import Modal from 'react-modal'
export default function Options(props) {
  const handleInputData = (e)  => props.setSearch(e.target.value)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    path: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const openModal = () => setIsOpen(true);
  const  closeModal = () => setIsOpen(false);

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/recipe', {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    window.location.reload(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      height: '20rem',
      width: '20rem',
      bottom: 'auto',
      paddingTop: '5rem',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'grid',
      justifyContent: 'center'
      ,
    },
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles["add-btn"]} onClick={openModal}>Agregar un platillo</button>
      <Image
        src={'/icons8-lupa-30.png'} 
        width={30}
        height={30}
        alt='lupa'
        className={styles.icon}
      />
      <input className={styles["search-bar"]} onChange={handleInputData} />
      <div className={styles.times}>
        {props.times.map((item, index) => (
          <button
            key={index}
            className={item.state ? styles["btn-t"] : styles["btn"]}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/*<button onClick={closeModal}>close</button>*/}
        <form onSubmit={handleSubmit}>
        <label className={styles['label']} for="name">Nombre del platillo</label>
        <input className={styles['login-field']} type="text" id="name" name="name" onChange={handleInputChange}/>

        <label className={styles['label']} for="path">Dirección de la imagen</label>
        <input className={styles['login-field']} type="text" id="path" name="path" onChange={handleInputChange} />
          <button className={styles['login-btn']} type='submit'>Aceptar</button>
        </form>
      </Modal>
    </div>
  );
}
