
import { type MousePost } from "src/api/prismic";
import "./mousecardstyles.css";

type MouseUICardProps = {
  mousePost: MousePost;
};
export default function MouseUICard(props: MouseUICardProps) {
  const data = props.mousePost.data;

  return (
    <a 
        href={data?.}
        target="_blank"
        rel="noopener noreferrer"
    className="card">
      <div className="card-image-container">
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
    </a>
  );
}
