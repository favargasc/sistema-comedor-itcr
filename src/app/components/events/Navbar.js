"use client";

import Image from "next/image";
import styles from "@/styles/events/navbar.module.css";
import data from "../../data/events.json";
import { useEffect, useState } from "react";

const FilterList = ({ events }) => (
  <div className={styles["category-filter"]}>
    {events.map(({ id, name }) => (
      <div className={styles.category} key={id}>
        {name}
      </div>
    ))}
  </div>
);

export default function Navbar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data);
  });
  return (
    <>
      <div className={styles["top-bar"]}>
        <span className={styles.title}>Platillos disponibles</span>
        <input
          className={styles["search-bar"]}
          placeholder="Encuentra platillos y bebidas"
        />
        <Image
          className={styles["search-icon"]}
          src={`/img/icons/hand-lens.png`}
          width={25}
          height={25}
          alt=""
        />
      </div>
      <FilterList events={events} />
    </>
  );
}
