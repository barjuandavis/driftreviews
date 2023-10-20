// import { type Dispatch, type SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./popupsectionstyles.css";
import CloseSvg from "@/assets/close.svg?react";
export default function PopupSection(props: {
  opened: boolean;
  setOpened: (opened: boolean) => void;
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
          className="pop-up-section"
        >
          <div className="pop-up-section__content">
            <div className="pop-up-section__close-button-container">
              <button
                type="button"
                aria-label="Close"
                className="pop-up-section__close-button"
                onClick={() => {
                  props.setOpened(false);
                }}
              >
                <CloseSvg />
              </button>
            </div>
            {props.children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
