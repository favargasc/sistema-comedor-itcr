"use client";

import Image from "next/image";
import styles from "@/styles/events/foodlist.module.css";
import data from "../../data/food.json";
import { useEffect, useState } from "react";

const PriceModule = ({ intern = 0, extern = 0 }) => (
  <div className={styles["price-module"]}>
    <span className={styles["intern-title"]}>{`Interno: ₡${intern}`}</span>
    <span className={styles["extern-title"]}>{`Externo: ₡${extern}`}</span>
  </div>
);

const Details = ({ name, category, intern, extern }) => (
  <div className={styles["text-content"]}>
    <span className={styles.title}>{name}</span>
    <span className={styles.subtitle}>{category}</span>
    <PriceModule intern={intern} extern={extern} />
  </div>
);

const FoodItem = ({ name, img, intern, extern }) => (
  <div className={styles["food-item"]}>
    <Image
      className={styles["food-img"]}
      src={`/img/food/${img}.png`}
      width={220}
      height={130}
      alt=""
    />
    <Details
      name={name}
      category={"Embutidos"}
      intern={intern}
      extern={extern}
    />
  </div>
);

export default function FoodList() {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    setFoodList(data);
  }, []);

  return (
    <div className={styles.wrapper}>
      {foodList.map(({ id, name, img, intern, extern }) => (
        <FoodItem
          key={id}
          name={name}
          img={img}
          intern={intern}
          extern={extern}
        />
      ))}
    </div>
  );
}
