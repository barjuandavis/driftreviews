import { motion } from "framer-motion";
import { type MousePost } from "../../api/prismic";
import Badge from "./MouseBadge";
import "./mousecardstyles.css";

type MouseUICardProps = {
  mousePost: MousePost;
};
export default function MouseUICard(props: MouseUICardProps) {
  const data = props.mousePost.data;

  //console.log(data);

  return (
    <motion.a
      //animation stuff
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
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
        <a
          href={data?.review_content_embed?.embed_url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button tiktok"
        >
          Watch Review
        </a>
      </div>
    </motion.a>
  );
}
