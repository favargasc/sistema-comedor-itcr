"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import data from "../../data/food.json";
import datac from "../../data/categories.json";
import styles from "@/styles/events/sidebar.module.css";

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <span>{title}</span>
    {children}
  </div>
);

const CartDetail = ({ name, intern, extern }) => (
  <div className={styles["cart-detail"]}>
    <span className={styles.title}>{name}</span>
    <span className={styles.price}>{`Interno: ₡${intern}`}</span>
    <span className={styles.price}>{`Externo: ₡${extern}`}</span>
  </div>
);

const CartItem = ({ name, img, intern, extern }) => (
  <div className={styles["cart-item"]}>
    <Image
      className={styles["item-img"]}
      src={`/img/food/${img}.png`}
      width={95}
      height={95}
      alt=""
    />
    <CartDetail name={name} intern={intern} extern={extern} />
  </div>
);

const CartList = ({ cartListItems }) => (
  <Section title={"Platillos disponibles"}>
    <div className={styles["cart-list"]}>
      {cartListItems.map(({ id, name, img, intern, extern }) => (
        <CartItem
          key={id}
          name={name}
          img={img}
          intern={intern}
          extern={extern}
        />
      ))}
    </div>
  </Section>
);

const CostumberSelector = ({ custumer, setCustomer, categories }) => (
  <Section title={"Categorías"}>
    <select
      name="select"
      value={custumer}
      onChange={(e) => setCustomer(e.target.value)}
    >
      {categories.map(({ id, name }) => (
        <option value={id}>{name}</option>
      ))}
    </select>
  </Section>
);

export default function Sidebar({ custumer, setCustomer }) {
  const [cartListItems, setCartList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCartList(data);
    setCategories(datac);
  }, []);

  return (
    <div className={styles.wrapper}>
      <CostumberSelector
        categories={categories}
        customer={custumer}
        setCustomer={setCustomer}
      />
      <CartList cartListItems={cartListItems} />
    </div>
  );
}
