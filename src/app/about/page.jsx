import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16278274/pexels-photo-16278274/free-photo-of-binatang-hewan-peliharaan-kucing-kotak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          priority={true}
          className={styles.img}
          alt="imgContainer"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            asperiores vel et distinctio accusamus impedit aliquid delectus, ad
            blanditiis? Minima placeat molestias, temporibus eum officiis
            <br />
            <br />
            eveniet alias facilis repellat, dolor aliquid, a voluptate dolorem
            praesentium ipsam mollitia. Totam rem officiis possimus deleniti
            commodi obcaecati veritatis nisi atque, doloribus corrupti
            provident.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            asperiores vel et distinctio accusamus impedit aliquid delectus, ad
            blanditiis? Minima placeat molestias, temporibus eum officiis
            <br />
            <br /> - Dynamic Website
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
