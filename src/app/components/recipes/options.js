'use client'

import React from "react";
import styles from "./options.module.css";

export default function Options(props) {
  return (
    <div className={styles.wrapper}>
      <button className={styles["add-btn"]}>Agregar</button>
      <input className={styles["search-bar"]} />
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
    </div>
  );
}
