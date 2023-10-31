"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import data from "../../data/food.json";

import styles from "@/styles/cart/sidebar.module.css";

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <span>{title}</span>
    {children}
  </div>
);

const Counter = () => {
  const [count, setCount] = useState(0);

  const reduce = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const ReduceCounter = () => (
    <button className={styles["counter-btn"]} onClick={reduce}>
      <Image src={`/img/icons/minus.png`} width={10} height={10} alt="" />
    </button>
  );

  const IncrementCounter = () => (
    <button
      className={styles["counter-btn"]}
      onClick={() => setCount((count) => count + 1)}
    >
      <Image src={`/img/icons/add.png`} width={10} height={10} alt="" />
    </button>
  );

  return (
    <div className={styles.counter}>
      <ReduceCounter />
      <span className={styles["counter-value"]}>{count}</span>
      <IncrementCounter />
    </div>
  );
};

const CartDetail = ({ name, price }) => (
  <div className={styles["cart-detail"]}>
    <span>{name}</span>
    <span className={styles.price}>{`₡${price}`}</span>
    <Counter />
  </div>
);

const CartItem = ({ name, img, price }) => (
  <div className={styles["cart-item"]}>
    <Image
      className={styles["item-img"]}
      src={`/img/food/${img}.png`}
      width={95}
      height={95}
      alt=""
    />
    <CartDetail name={name} price={price} />
    <button className={styles["delete-btn"]}>
      <Image src={`/img/icons/trash.png`} width={20} height={20} alt="" />
    </button>
  </div>
);

const CartList = ({ cartListItems }) => (
  <Section title={"Orden actual"}>
    <div className={styles["cart-list"]}>
      {cartListItems.map(({ id, name, img, intern }) => (
        <CartItem key={id} name={name} img={img} price={intern} />
      ))}
    </div>
  </Section>
);

const CostumberSelector = ({ custumer, setCustomer }) => (
  <Section title={"Información del cliente"}>
    <select
      name="select"
      value={custumer}
      onChange={(e) => setCustomer(e.target.value)}
    >
      <option value={true}>Interno</option>
      <option value={false}>Externo</option>
    </select>
  </Section>
);

export default function Sidebar({ custumer, setCustomer }) {
  const [cartListItems, setCartList] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    setCartList(data);

    setTotal(
      cartListItems
        .map((item) => item.intern)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    );
  }, []);

  const Total = () => (
    <Section title={"Detalle de compra"}>
      <div className={styles["detail-total"]}>
        <span>{"Total"}</span>
        <span className={styles.price}>{`₡ ${total}`}</span>
      </div>
      <button className={styles["pay-btn"]}>Cobrar</button>
    </Section>
  );

  return (
    <div className={styles.wrapper}>
      <CostumberSelector customer={custumer} setCustomer={setCustomer} />
      <CartList cartListItems={cartListItems} />
      <Total />
    </div>
  );
}
