import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      target="_blank"
      href='/'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      alt="no">
      <div className={styles.content}>
        <h1 className={styles.header}>
          <code>
            Hi, I&rsquo;m Kartik.
          </code>
        </h1>
        <code>
          I&rsquo;m a 20 year old student
        </code>
        <div className={styles.footer}>
          <code>
            New Delhi, India
          </code></div>
      </div>
    </motion.div>
  )
}