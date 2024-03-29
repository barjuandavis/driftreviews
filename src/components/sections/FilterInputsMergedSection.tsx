import { motion, AnimatePresence } from "framer-motion";
import MouseFilterInputsSection from "../mouse/MouseFilterInputsSection";
import { ContentType } from "@/consts";

type FilterInputsMergedSectionProps = {
  setFilterButtonOpened: (value: boolean) => void;
  setFilterInputsSectionsOpened: (value: boolean) => void;
  filterInputsSectionsOpened: boolean;
  placeholder?: string;
  contentType?: ContentType;
};

export default function FilterInputsMergedSection({
  setFilterButtonOpened,
  setFilterInputsSectionsOpened,
  filterInputsSectionsOpened,
  placeholder,
}: FilterInputsMergedSectionProps) {
  return (
    <>
      <motion.div
        // animate when the previous input button has been scrolled away\
        onViewportLeave={() => {
          setFilterInputsSectionsOpened(true);
        }}
        onViewportEnter={() => {
          setFilterInputsSectionsOpened(false);
        }}
        className="flex flex-wrap gap-4 w-full justify-center"
      >
        <MouseFilterInputsSection
          placeholder={placeholder}
          isAbsolute={false}
          setFilterButtonOpened={setFilterButtonOpened}
        />
      </motion.div>
      <AnimatePresence>
        {filterInputsSectionsOpened && (
          <motion.div
            initial={{
              opacity: 0,
              position: "fixed",
              display: "flex",
              justifyContent: "center",
              width: "100vw",
              height: "12vh",
              zIndex: 100,
              top: 0,
              left: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0) 100%)",
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <MouseFilterInputsSection
              placeholder={placeholder}
              isAbsolute={true}
              setFilterButtonOpened={setFilterButtonOpened}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
