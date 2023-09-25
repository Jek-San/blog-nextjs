import Link from "next/link"
import styles from "./page.module.css"

const Portofolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portofolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portofolio/websites" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portofolio/application" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portofolio
