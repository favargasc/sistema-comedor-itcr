import styles from '../../styles/dishes/dishes.module.css'

export default function DishesLayout ({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}