"use client"
import React, { useContext } from "react"
import styles from "./darkMode.module.css"
import { ThemeContext } from "../../../context/ThemeContaxt"
const DarkModeToggle = () => {
  const { toogle, mode } = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toogle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  )
}

export default DarkModeToggle
