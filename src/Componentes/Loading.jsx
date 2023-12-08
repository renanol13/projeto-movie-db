import svgLoading from '../img/loadingMovie.svg'


import styles from './Loading.module.css'

export default function Loading() {
  return (
      <div className={styles.boxLoading}>
      <img src={svgLoading} alt="Loading" />
    </div>
  )
}
