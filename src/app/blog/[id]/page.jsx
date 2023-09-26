import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import { notFound } from "next/navigation"

async function getData(id) {
  const res = await fetch("http://localhost:3000/api/posts/" + id, {
    cache: "no-store",
  })
  if (!res.ok) {
    return notFound()
  }
  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}
const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.title}</p>
          <div className={styles.avatarContainer}>
            <div className={styles.imgAvatar}>
              <Image
                className={styles.imgInfo}
                src="https://images.pexels.com/photos/2643905/pexels-photo-2643905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                fill={true}
              />
            </div>
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={data.img} alt="" fill={true} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost
