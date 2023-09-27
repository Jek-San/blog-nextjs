"use client"
import React, { useEffect } from "react"
import styles from "./page.module.css"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()
  const session = useSession()

  if (session.status === "authenticated") {
    router.replace("/dashboard")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    console.log(email, password)
    try {
      await signIn("credentials", { email, password })

      router?.replace("/dashboard")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <p className={styles.desc}>Please Sign in to See the dashboard</p>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Login{" "}
        </button>
        <button
          className={styles.button + " " + styles.google}
          onClick={(e) => {
            e.preventDefault()
            console.log("clikesd")
            signIn("google")
          }}
        >
          Login with Google{" "}
        </button>
      </form>

      <div className={styles.or}>OR</div>
      <Link href={"/register"}>
        <div className={styles.newAccount}>Create new account</div>
      </Link>
    </div>
  )
}

export default Login
