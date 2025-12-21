"use client";

import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentMonth = new Date().getMonth();
  const isWinterMonth = currentMonth === 0 || currentMonth === 10 || currentMonth === 11;
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "easeInOut", stiffness: 50 }}
    >
      {isWinterMonth && <Snowfall />}
      {children}
    </motion.div>
  );
}
