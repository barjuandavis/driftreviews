import { motion, AnimatePresence } from "framer-motion";
import { type MousePost } from "../../api/prismic";
import Badge from "./MouseBadge";
import "./mousecardstyles.css";

type MouseUICardProps = {
  mousePost: MousePost;
};
export default function MouseUICard(props: MouseUICardProps) {
  const data = props.mousePost.data;

  return (
    <AnimatePresence>
      <motion.a
        //animation stuff
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        href={data?.affiliate_link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <div className="card-image-container">
          <Badge rank={data.rank} />
          <img
            className="card__image"
            src={data?.mouse_image.url}
            alt={data?.mouse_image.alt}
          />
        </div>
        <div className="card__content">
          <p className="card__title">{data?.mouse_name_short}</p>
          <div className="card__rating"></div>
          <p className="card__text">{data?.review_content_embed?.title}</p>
        </div>
      </motion.a>
    </AnimatePresence>
  );
}
