import Script from "next/script";
import styles from "../../styles/Layout.module.css";
import { motion } from "framer-motion";

function handleClick() {
  var body = document.getElementById('msg').value;
  document.getElementById("form").action = "mailto:kartik.sindura@gmail.com?&body=" + body;
}

export default function Contact() {

  return (
    <motion.div
      target="_blank"
      href="/"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <code>
        <div className={styles.content}>
          <h1 className={styles.header}>Drop me a message</h1>
          <form
          id = 'form'
            method="post"
            action="mailto:kartik.sindura@gmail.com?
&body="
          >
            <div className={styles.formcontainer}>
              <label>Message</label>
              <textarea className={styles.message} type="textarea" id="msg" />
            </div>
            <div className={styles.formcontainer}>
              <input className={styles.button} onClick={handleClick} type="submit" />
            </div>
          </form>
          <div className={styles.footer}></div>
        </div>
      </code>
    </motion.div>
  );
}
