import { motion } from "framer-motion";
import { type MousePost } from "../../api/prismic";

import RankBadge from "./badges/RankBadge";
import PriceRangeBadge, { PriceRanges } from "./badges/PriceRangeBadge";
import MouseShapeBadge, { MouseShapes } from "./badges/MouseShapeBadge";
import ValueRatingBadge, { ValueRatings } from "./badges/ValueRatingBadge";
import TiktokSvg from "../../assets/tiktok.svg?react";
import ShopeeSvg from "../../assets/shopee.svg?react";
import TokopediaPng from "../../assets/tokopedia.png";

import posthog from "posthog-js";

import "./mousecardstyles.css";
import TokopediaWarning from "../sections/TokopediaWarning";
import React from "react";

type MouseUICardProps = {
  mousePost: MousePost;
};
export default function MouseUICard(props: MouseUICardProps) {
  const data = props.mousePost.data;
  const [tokopediaWarningOpened, setTokopediaWarningOpened] =
    React.useState(false);
  return (
    <motion.div
      //animation stuff
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      rel="noopener noreferrer"
      className="card"
    >
      <TokopediaWarning
        opened={tokopediaWarningOpened}
        setOpened={setTokopediaWarningOpened}
        linkTokopedia={data?.affiliate_link_tokopedia?.url}
      />
      <div className="card-image-container">
        <RankBadge rank={data.rank} />
        <img
          className="card__image"
          src={data?.mouse_image.url}
          alt={data?.mouse_image.alt}
        />
      </div>
      <div className="card__content">
        <div className="flex w-full flex-col h-fit items-start justify-start gap-2 mb-2">
          <div className="w-fit">
            <ValueRatingBadge
              valueRating={data?.value_rating as ValueRatings}
            />
          </div>
          <div className="flex w-full gap-1 h-fit items-start justify-start">
            <MouseShapeBadge
              mouseShape={data?.mouse_shape_type as MouseShapes}
            />
            <PriceRangeBadge priceRange={data?.price_range as PriceRanges} />
          </div>
        </div>
        <p className="card__title">{data?.mouse_name_short}</p>
        <div className="card__rating"></div>
        <p className="card__text">
          {data?.review_content_embed?.title ?? data?.short_description}
        </p>
        <div className="flex w-full justify-center items-center gap-4">
          <button
            onClick={() => {
              posthog.capture("Affiliate Link Clicked", {
                mouse_name: data?.mouse_name_short,
                affiliate_link: data?.affiliate_link_tokopedia?.url,
                platform: "tokopedia",
              });
              if (data?.affiliate_link_tokopedia?.url !== undefined) {
                setTokopediaWarningOpened(true);
              }
            }}
            className={
              data?.affiliate_link_tokopedia?.url === undefined
                ? "link-button disabled-link-button"
                : "link-button tokopedia"
            }
          >
            <img
              className="fill-current w-6 h-6"
              style={{
                filter:
                  data?.affiliate_link_tokopedia?.url === undefined
                    ? "grayscale(100%)"
                    : "none",
              }}
              src={TokopediaPng}
              alt="tokopedia"
            />
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              posthog.capture("Affiliate Link Clicked", {
                mouse_name: data?.mouse_name_short,
                affiliate_link: data?.affiliate_link?.url,
                platform: "shopee",
              });
            }}
            href={data?.affiliate_link?.url}
            className={
              data?.affiliate_link?.url === undefined
                ? "link-button disabled-link-button"
                : "link-button shopee"
            }
          >
            <ShopeeSvg className="fill-current w-6 h-6" />
          </a>

          <a
            href={data?.review_content_embed?.embed_url}
            onClick={() => {
              posthog.capture("Tiktok Link Clicked", {
                mouse_name: data?.mouse_name_short,
                tiktok_link: data?.review_content_embed?.embed_url,
              });
            }}
            target="_blank"
            rel="noopener noreferrer"
            className={
              data?.review_content_embed?.embed_url === undefined
                ? "link-button disabled-link-button"
                : "link-button tiktok"
            }
          >
            <TiktokSvg className="fill-current w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
