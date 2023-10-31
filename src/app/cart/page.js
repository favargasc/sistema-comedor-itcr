"use client";

import styles from "@/styles/cart/cart.module.css";
import Navbar from "@/components/cart/Navbar";
import FoodList from "@/components/cart/FoodList";
import Sidebar from "@/components/cart/Sidebar";
import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [currentCustomer, setCurrentCustomer] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <FoodList costumer={currentCustomer} setCustomer={setCurrentCustomer} />
      <Sidebar costumer={currentCustomer} setCustomer={setCurrentCustomer} />
    </div>
  );
}
