import { motion } from "framer-motion";

import NotFound from "../../assets/undraw_no_data_re_kwbl.svg?react";

export default function MouseNotFoundSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-8 flex flex-col items-center justify-center gap-8 w-full flex-wrap max-h-fit bg-white rounded-xl"
    >
      <NotFound className="max-w-xs max-h-fit aspect-square" />
      <p>Mouse tidak ditemukan.</p>
    </motion.div>
  );
}
