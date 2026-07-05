import { motion } from "framer-motion";

function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-[140px] opacity-20 pointer-events-none"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="fixed top-1/2 right-20 w-72 h-72 bg-purple-500 rounded-full blur-[140px] opacity-20 pointer-events-none"
      />

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="fixed bottom-10 left-1/3 w-72 h-72 bg-pink-500 rounded-full blur-[140px] opacity-20 pointer-events-none"
      />
    </>
  );
}

export default FloatingOrbs;