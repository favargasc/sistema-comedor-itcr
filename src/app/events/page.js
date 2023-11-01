"use client";

import FoodList from "@/components/events/FoodList";
import Navbar from "@/components/events/Navbar";
import Sidebar from "@/components/events/Sidebar";
import styles from "@/styles/cart/cart.module.css";
import { useState } from "react";

export default function Events() {
  const [currentEvent, setCurrentEvent] = useState(1);

  return (
    <div className={styles.wrapper}>
      <Navbar currentEvent={currentEvent} setCurrentEvent={setCurrentEvent} />
      <FoodList currentEvent={currentEvent} />
      <Sidebar currentEvent={currentEvent} />
    </div>
  );
}
