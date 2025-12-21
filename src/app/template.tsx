"use client";

import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import Snowflake from "react-snowfall/lib/Snowflake";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "easeInOut", stiffness: 50 }}
    >
      <Snowfall />
      {children}
    </motion.div>
  );
}