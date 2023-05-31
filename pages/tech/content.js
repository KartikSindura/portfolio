import Box from "./components/TechBox";
import styles from "../../styles/Box.module.css";
import { motion } from "framer-motion";

export default function Exp(props) {
  const exps = [
    {
      title: "Python",
      image: "/pythonblack.png",
      width: 128,
      height: 128,
      color: "white",
      lines: ["First language that I learned."],
    },
    {
      title: "Javascript",
      image: "/js.svg.png",
      width: 128,
      height: 128,
      color: "#F7E01D",
      lines: ["My go to language for webdev."],
    },
    // {
    //   title: "NodeJS",
    //   image: "/nodejs.svg",
    //   width: 128,
    //   height: 128,
    //   color: '#F7F7F7',
    //   lines: [
    //     "Currently learning."
    //   ],
    // },
    {
      title: "Firebase",
      image: "/firebase.svg",
      width: 128,
      height: 128,
      color: "#ffffff",
      lines: ["Easy to configure and use."],
    },
    {
      title: "NextJS",
      image: "/next_logo.png",
      width: 128,
      height: 128,
      color: "#111111",
      lines: ["React framework that I use to build web applications."],
    },
  ];

  return (
    <motion.div
      target="_blank"
      href="/"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <code className={styles.container}>
        <h1 style={{"color": "gainsboro"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-file-code"
            width="45"
            height="45"
            viewBox="3 -5 24 24"
            stroke-width="1.5"
            stroke="#dcdcdc"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ "overflow": "visible" }}
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M10 13l-1 2l1 2" />
            <path d="M14 13l1 2l-1 2" />
          </svg>
          Languages and Frameworks
        </h1>
        <h3>(Languages and frameworks I'm familiar with right now.)</h3>
        {exps.map((el, ind) => (
          <Box key={ind} {...el} />
        ))}
      </code>
    </motion.div>
  );
}
