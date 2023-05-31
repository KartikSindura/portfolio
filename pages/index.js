import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      target="_blank"
      href="/"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      alt="no"
    >
      <div className={styles.content}>
        <h1 className={styles.header}>
          <code>Hi, I'm Kartik.</code>
        </h1>
        <code>
          I'm a 20 year old student. I spend my time learning &
          experimenting new technologies. I'm currently focusing on
          participating in developer friendly events, hackathons and
          contributing to opensource projects & softwares.
        </code>
        <div className={styles.footer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map-pin"
            width="20"
            height="20"
            viewBox="5 -4 24 24"
            stroke-width="1.5"
            stroke="#dcdcdc"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ overflow: "visible" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <code>New Delhi, India</code>
        </div>
      </div>
    </motion.div>
  );
}
