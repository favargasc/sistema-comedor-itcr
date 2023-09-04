'use client'
import LoginForm from '../components/login/loginform'
import '../../styles/global.css'
import styles from '../components/login/page.module.css'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <LoginForm method={setMsg}/>
      <div className={styles.img}>
        <h1>{msg}</h1>
      </div>
    </main>
  )
}
