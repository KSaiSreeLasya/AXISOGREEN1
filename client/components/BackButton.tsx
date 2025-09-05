import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.98 }}>
      <Link
        to="/solutions"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border text-sm shadow hover:shadow-md"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Solutions</span>
      </Link>
    </motion.div>
  );
}
