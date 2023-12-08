import styles from './container.module.css'


export default function Container({children}) {
  return (
    <div className={styles.boxConteiner}>
      {children}
    </div>
  )
}
