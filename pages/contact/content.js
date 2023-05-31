import Script from "next/script";
import styles from "../../styles/Layout.module.css";
import { motion } from "framer-motion";

function handleClick(e) {
  var body = document.getElementById("msg").value;
  // document.getElementById("form").action = "mailto:kartik.sindura@gmail.com?&body=" + body;
  e.preventDefault();
  window.open(`mailto:kartik.sindura@gmail.com?&body=${body}`);
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
            id="form"
            method="post"
            //             action="mailto:kartik.sindura@gmail.com?
            // &body="
          >
            <div className={styles.formcontainer}>
              <label>Message</label>
              <textarea className={styles.message} type="textarea" id="msg" />
            </div>
            <div className={styles.formcontainer}>
              <button
                className={styles.button}
                onClick={handleClick}
                type="Submit"
              >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="30"
              height="30"
              viewBox="2 -3 24 24"
              stroke-width="1.5"
              stroke="#dcdcdc"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{"overflow": "visible"}}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            </button>
            </div>
          </form>
          <div className={styles.footer}></div>
        </div>
      </code>
    </motion.div>
  );
}
