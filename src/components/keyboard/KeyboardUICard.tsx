import { motion } from "framer-motion";
import { type KeyboardPost } from "../../api/prismic";

import RankBadge from "./badges/RankBadge";
import PriceRangeBadge, { MousepadPrices } from "./badges/PriceRangeBadge";

import ValueRatingBadge, { ValueRatings } from "./badges/ValueRatingBadge";

import TiktokSvg from "../../assets/tiktok.svg?react";
import ShopeeSvg from "../../assets/shopee.svg?react";
import TokopediaPng from "../../assets/tokopedia.png";

import posthog from "posthog-js";

import TokopediaWarning from "../sections/TokopediaWarning";
import React from "react";

import "./mousepadcardstyles.css";
import { cleanUpPriceRange } from "@/lib/generateValues";

export default function KeyboardUICard(props: { mousepadPost: KeyboardPost }) {
  const data = props.mousepadPost.data;

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
      className="card-mp"
    >
      <TokopediaWarning
        opened={tokopediaWarningOpened}
        setOpened={setTokopediaWarningOpened}
        linkTokopedia={data?.affiliate_link_tokopedia?.url}
      />
      <div className="card-image-container">
        <RankBadge rank={data.rank} />
        <img
          className="card__image-mp"
          src={data?.image.url}
          alt={data?.image.alt}
        />
      </div>
      <div className="card__content-mp">
        <div className="flex w-full flex-col h-fit items-start justify-start gap-2 mb-2">
          <div className="flex w-full gap-1 h-fit items-start justify-start">
            <ValueRatingBadge
              valueRating={data?.value_rating as ValueRatings}
            />
            <PriceRangeBadge
              priceRange={
                cleanUpPriceRange(data?.price_range) as MousepadPrices
              }
            />
          </div>
        </div>

        <p className="card__title-mp">{data?.keyboard_name}</p>
        <div
          className="
          grid grid-cols-2 gap-x-4
          "
        >
          <p className="card__text-mp">
            <b>Ukuran</b>
          </p>
          <p className="card__text-mp"> {data?.keyboard_size}</p>
          <p className="card__text-mp">
            <b>Rapid Trigger?</b>
          </p>
          <p className="card__text-mp">
            {" "}
            {data?.is_rapid_trigger ? "Ya" : "Tidak"}
          </p>
          <p className="card__text-mp">
            <b>Switch</b>
          </p>
          <p className="card__text-mp"> {data?.keyboard_switch}</p>
          <p className="card__text-mp">
            <b>Keycaps</b>
          </p>
          <p className="card__text-mp"> {data?.keyboard_keycaps_bawaan}</p>

          <p className="card__text-mp">
            <b>Case</b>
          </p>
          <p className="card__text-mp">{data?.keyboard_case}</p>

          <p className="card__text-mp">
            <b>Koneksi</b>
          </p>
          <p className="card__text-mp">{data.keyboard_koneksi}</p>
        </div>

        <div className="flex w-full justify-center items-center gap-4 py-2">
          <button
            onClick={() => {
              posthog.capture("Affiliate Link Clicked", {
                item_name: data?.keyboard_name,
                affiliate_link: data?.affiliate_link_tokopedia?.url,
                platform: "tokopedia",
                item_type: "keyboard",
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
                item_name: data?.keyboard_name,
                affiliate_link: data?.affiliate_link?.url,
                platform: "shopee",
                item_type: "mousepad",
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
                mouse_name: data?.keyboard_name,
                tiktok_link: data?.review_content_embed?.embed_url,
                item_type: "keyboard",
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
