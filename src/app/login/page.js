"use client";
import LoginForm from "../components/login/loginform";
import "../../styles/global.css";
import styles from "../components/login/page.module.css";
import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  return (
    <main className={styles.wrapper}>
      <LoginForm method={setMsg} />
      <div className={styles.img}>
        <h1>{msg}</h1>
      </div>
    </main>
  );
}
