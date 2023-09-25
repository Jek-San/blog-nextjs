import React from "react"
import styles from "./footer.module.css"
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 jack. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          alt="jack."
          className={styles.icon}
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          alt="jack."
          className={styles.icon}
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          alt="jack."
          className={styles.icon}
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          alt="jack."
          className={styles.icon}
        />
      </div>
    </div>
  )
}

export default Footer
