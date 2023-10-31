"use client";

import Image from "next/image";
import styles from "@/styles/cart/foodlist.module.css";
import data from "../../data/food.json";
import { useEffect, useState } from "react";

const Details = ({ name, category, price }) => (
  <div className={styles["text-content"]}>
    <span className={styles.title}>{name}</span>
    <span className={styles.subtitle}>{category}</span>
    <span className={styles.title}>{`₡${price}`}</span>
  </div>
);

const FoodItem = ({ name, img, price }) => (
  <div className={styles["food-item"]}>
    <Image
      className={styles["food-img"]}
      src={`/img/food/${img}.png`}
      width={220}
      height={130}
      alt=""
    />
    <div className={styles["detail-summary"]}>
      <Details name={name} price={price} category={"Embutidos"} />
      <button>Ordenar</button>
    </div>
  </div>
);

export default function FoodList({ setCustomer, custumer }) {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    custumer
      ? setFoodList(data.map((item) => ({ ...item, price: item.intern })))
      : setFoodList(data.map((item) => ({ ...item, price: item.extern })));
  }, [custumer]);

  return (
    <div className={styles.wrapper}>
      {foodList.map(({ id, name, img, price }) => (
        <FoodItem key={id} name={name} img={img} price={price} />
      ))}
    </div>
  );
}
