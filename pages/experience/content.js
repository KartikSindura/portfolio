import Box from "./components/ExpBox";
import styles from "../../styles/Box.module.css";
import { motion } from "framer-motion";

export default function Exp(props) {
  const exps = [
    {
      title: "NSUT Hackathon",
      subtitle: "November, 22, 2022",
      lines: [
        "30hr hackathon",
        "• Made it to top 4.",  
      ],
    },
    {
      title: "Nunc sollicitudin",
      subtitle: "Mar, 22",
      lines: [
        "Sed convallis justo a lacinia dictum",
        "• Nunc sollicitudin",
        "• Quisque quis turpis accumsan, varius ligula sed, ultrices velit. Aenean eros justo, tristique ut tempus id, iaculis non augue.",
      ],
    },
    {
      title: "Donec sapien",
      subtitle: "Feb, 22",
      lines: [
        "Nulla eu vulputate ligula, eget rhoncus magna.",
        "• Vivamus ac ex quis elit consequat commodo.",
      ],
    },
    {
      title: "Nomaan",
      subtitle: "Jan, 22",
      lines: ["Maruis", "• Typing more lorem ipsum."],
    },
    {
      title: "Cras lectus",
      subtitle: "Jan, 21",
      lines: [
        "Mauris",
        "• Donec sapien mauris, suscipit nec lorem lacinia, porttitor mattis enim.",
        "• Cras lectus leo, blandit convallis porta id, iaculis a magna.",
      ],
    },
    {
      title: "Aliquam",
      subtitle: "Feb, 20",
      lines: [
        "Aenean consequat ornare consequat.",
        "• Sed convallis justo a lacinia dictum. Cras lectus leo, blandit convallis porta id, iaculis a magna.",
      ],
    },
    {
      title: "Cras lectus",
      subtitle: "Jan, 21",
      lines: [
        "Donec sapien mauris",
        "• Donec sapien mauris, suscipit nec lorem lacinia, porttitor mattis enim.",
        "• Cras lectus leo, blandit convallis porta id, iaculis a magna.",
      ],
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
            class="icon icon-tabler icon-tabler-edit"
            width="40"
            height="40"
            viewBox="3 -5 24 24"
            stroke-width="1.5"
            stroke="#dcdcdc"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ overflow: "visible" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
          Experiences
        </h1>
        {exps.map((el, ind) => (
          <Box key={ind} {...el} />
        ))}
      </code>
    </motion.div>
  );
}
