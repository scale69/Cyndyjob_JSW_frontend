"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../FramerScrollAnimate";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
