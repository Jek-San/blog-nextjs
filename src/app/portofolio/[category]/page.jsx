import React from "react"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"
import Image from "next/image"

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portofolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            eligendi id illo, tempora reprehenderit earum facilis omnis, sint
            maxime quasi dicta officia! Ut, sapiente? Eligendi provident
            accusamus minus molestias laboriosam commodi quia rem reiciendis
            ullam. Sunt voluptate eligendi commodi corporis.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/6157689/pexels-photo-6157689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portofolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            eligendi id illo, tempora reprehenderit earum facilis omnis, sint
            maxime quasi dicta officia! Ut, sapiente? Eligendi provident
            accusamus minus molestias laboriosam commodi quia rem reiciendis
            ullam. Sunt voluptate eligendi commodi corporis.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/6157689/pexels-photo-6157689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portofolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            eligendi id illo, tempora reprehenderit earum facilis omnis, sint
            maxime quasi dicta officia! Ut, sapiente? Eligendi provident
            accusamus minus molestias laboriosam commodi quia rem reiciendis
            ullam. Sunt voluptate eligendi commodi corporis.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/6157689/pexels-photo-6157689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category
