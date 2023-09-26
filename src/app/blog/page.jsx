import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }
  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item._id} `} key={item.id}>
          <div className={styles.items}>
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/6157689/pexels-photo-6157689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                priority={true}
                width={700}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
