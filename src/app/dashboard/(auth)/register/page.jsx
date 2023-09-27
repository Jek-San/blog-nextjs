"use client"
import React, { useState } from "react"
import styles from "./page.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"
const Login = () => {
  const [err, setErr] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    console.log(name, email, password)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created")
    } catch (err) {
      console.log(err)
      setErr(true)
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <p className={styles.desc}>Please sign up to see the dashboard.</p>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Sign Up{" "}
        </button>
        <button className={styles.button + " " + styles.google}>
          Login with Google{" "}
        </button>
      </form>
      {err && "Something went wrong"}
      <div className={styles.or}>OR</div>
      <Link href={"/register"}>
        <div className={styles.newAccount}>Create new account</div>
      </Link>
    </div>
  )
}

export default Login
