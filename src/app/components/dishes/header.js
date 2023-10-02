import styles from '../../../styles/dishes/header.module.css'

export default function TopBar() {
  return (
    <header className={styles.wrapper}>
      <button className={styles['add-btn']}>Agregar</button>
      <input />
      <button>Filtrar</button>
      <button>Ordenar por: Recomendados</button>
    </header>
  )
}