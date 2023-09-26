import React from "react"
import styles from "./page.module.css"
import Link from "next/link"
const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <p className={styles.desc}>Please sign up to see the dashboard.</p>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button className={styles.button}>Login </button>
        <button className={styles.button + " " + styles.google}>
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
