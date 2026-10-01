"use client"
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <main className="bg-background">
        <h1 className=" text-foreground bg-background">Agência Template</h1>
      </main>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
       className="bg-primary text-white p-5"
       >
         Teste da cor primária
      </motion.div>
    </div>
  );
}
