// import { type Dispatch, type SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SlideoutSection(props: {
  opened: boolean;
  children: React.ReactNode;
}) {
  const { opened } = props;
  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: opened ? 1 : 0, y: opened ? 0 : -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "anticipate" }}
          className="px-4 py-12 text-center bg-white rounded-lg"
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
