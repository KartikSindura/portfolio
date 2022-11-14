import styles from '../../styles/Layout.module.css'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
      target="_blank"
      href='/'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}>
          <code>
      <div className={styles.content}>
        <h1 className={styles.header}>
            Drop me a message
        </h1>
        <form method="post">
          <div className={styles.formcontainer}>
            <label>Name</label>
            <input className={styles.input} type="text" maxLength={50}/>
          </div>
          <div className={styles.formcontainer}>
            <label>Email</label>
            <input className={styles.input} type="text" maxLength={70}/>
          </div>
          <div className={styles.formcontainer}>
            <label>Message</label>
            <textarea className={styles.message} type="textarea" />
          </div>
          <div className={styles.formcontainer}>
            <button className={styles.button} type="submit">Submit</button>
          </div>
        </form>
        <div className={styles.footer}></div>
      </div>
          </code>
    </motion.div>
  )
}
