"use client";

import { motion } from "framer-motion";
import { ShoppingCartIcon, ArrowUpCircle } from "lucide-react";

const Shortcuts = () => {
  return (
    <motion.div
      className="fixed bottom-5 md:bottom-10 right-5 md:right-10 flex flex-col gap-4 z-50"
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
      animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
      transition={{ type: "spring", stiffness: 100, damping: 15 }} // Smooth spring animation
    >
      {/* Shopping Cart Button */}
      <motion.div
        className="bg-black text-white rounded-[10px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer"
        style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on tap
      >
        <ShoppingCartIcon />
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        className="bg-white rounded-[10px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer"
        style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on tap
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top on click
      >
        <ArrowUpCircle size={28} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
};

export default Shortcuts;
