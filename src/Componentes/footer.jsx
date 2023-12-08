import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.boxFooter}>
      <p>
        <strong>MovieDB</strong>  &copy;
        Desenvolvido por Renan 2023
      </p>
    </footer>
  )
}