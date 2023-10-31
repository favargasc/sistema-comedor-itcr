"use client";

import FoodList from "@/components/events/FoodList";
import Navbar from "@/components/events/Navbar";
import Sidebar from "@/components/events/Sidebar";
import styles from "@/styles/cart/cart.module.css";

export default function Events() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <FoodList />
      <Sidebar />
    </div>
  );
}
