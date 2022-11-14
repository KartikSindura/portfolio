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
            Hi, Im Kartik.
          </code>
        </h1>
        <code>
          Im a 19 year old student, I spend my time typing lorem ipsum Quisque tempus dolor eget erat blandit, vel egestas purus porttitor.
          Morbi lectus sapien, congue vulputate libero non, ultrices scelerisque neque. Duis aliquet pulvinar viverra.
          Etiam vitae sem ut quam porttitor aliquam eu sed ante. Etiam consectetur finibus aliquam. Cras accumsan a odio efficitur vehicula.
          Quisque fringilla condimentum vestibulum. Vestibulum diam est, facilisis eu faucibus non, facilisis sit amet elit.
          Nulla finibus lorem sit amet est venenatis rhoncus eget et ex. Morbi imperdiet auctor risus sed porttitor.
          Sed non turpis hendrerit, sodales enim sit amet, convallis nunc. Nam a pellentesque tellus. Nullam ut ex mauris.
          Phasellus fringilla mauris tellus, a aliquet magna porta nec.
          Etiam vitae sem ut quam porttitor aliquam eu sed ante. Etiam consectetur finibus aliquam. Cras accumsan a odio efficitur vehicula.
          Quisque fringilla condimentum vestibulum. Vestibulum diam est, facilisis eu faucibus non, facilisis sit amet elit.
          Nulla finibus lorem sit amet est venenatis rhoncus eget et ex. Morbi imperdiet auctor risus sed porttitor.
          Sed non turpis hendrerit, sodales enim sit amet, convallis nunc. Nam a pellentesque tellus. Nullam ut ex mauris.
          Phasellus fringilla mauris tellus, a aliquet magna porta nec.
        </code>
        <div className={styles.footer}>
          <code>
            hello
          </code></div>
      </div>
    </motion.div>
  )
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDocS3999chiQ2BVoCWAxvJWNU1OlY8SnY",
  authDomain: "uixi-bc3c1.firebaseapp.com",
  projectId: "uixi-bc3c1",
  storageBucket: "uixi-bc3c1.appspot.com",
  messagingSenderId: "103825642242",
  appId: "1:103825642242:web:4ffacf40202696e780281b",
  measurementId: "G-YCMTJTXCNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);