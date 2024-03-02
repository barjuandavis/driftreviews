// import { Item } from "@/api/prismic";
// import TokopediaWarning from "../sections/TokopediaWarning";
// import {motion } from "framer-motion";
// import RankBadge from "../mouse/badges/RankBadge";
// import ValueRatingBadge from "../mouse/badges/ValueRatingBadge";
// import PriceRangeBadge from "../mouse/badges/PriceRangeBadge";

// export default function BaseCard(data: Item) {

//     return (
//         <motion.div
//         //animation stuff
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.2, ease: "easeInOut" }}
//         rel="noopener noreferrer"
//         className="card-mp"
//       >
//         <TokopediaWarning
//           opened={tokopediaWarningOpened}
//           setOpened={setTokopediaWarningOpened}
//           linkTokopedia={data?.affiliate_link_tokopedia?.url}
//         />
//         <div className="card-image-container">
//           <RankBadge rank={data.rank} />
//           <img
//             className="card__image-mp"
//             src={data?.keyboard_image.url}
//             alt={data?.keyboard_image.alt}
//           />
//         </div>
//         <div className="card__content-mp">
//           <div className="flex w-full flex-col h-fit items-start justify-start gap-2 mb-2">
//             <div className="flex w-full gap-1 h-fit items-start justify-start">
//               <ValueRatingBadge
//                 valueRating={data?.value_rating as ValueRatings}
//               />
//               <PriceRangeBadge priceRange={data?.price_range as MousepadPrices} />
//             </div>
//           </div>

//           <p className="card__title-mp">{data?.keyboard_name}</p>
//           <div
//             className="
//             grid grid-cols-2 gap-x-4
//             "
//           >
//             <p className="card__text-mp">
//               <b>Layout</b>
//             </p>
//             <p className="card__text-mp"> {data?.key} mm</p>
//             <p className="card__text-mp">
//               <b>Width</b>
//             </p>
//             <p className="card__text-mp"> {data?.width} mm</p>
//             <p className="card__text-mp">
//               <b>Thickness</b>
//             </p>
//             <p className="card__text-mp"> {data?.thickness} mm</p>
//             <p className="card__text-mp">
//               <b>Static Friction</b>
//             </p>
//             <p className="card__text-mp">
//               <Bullets num={parseInt(data.static_friction)}></Bullets>
//             </p>

//             <p className="card__text-mp">
//               <b>Dynamic Friction</b>
//             </p>
//             <p className="card__text-mp">
//               <Bullets num={parseInt(data.dynamic_friction)}></Bullets>
//             </p>

//             <p className="card__text-mp">
//               <b>Stickiness</b>
//             </p>
//             <p className="card__text-mp">
//               <Bullets num={parseInt(data.stickiness)}></Bullets>
//             </p>
//           </div>

//           <div className="flex w-full justify-center items-center gap-4 py-2">
//             <button
//               onClick={() => {
//                 posthog.capture("Affiliate Link Clicked", {
//                   item_name: data?.keyboard_name,
//                   affiliate_link: data?.affiliate_link_tokopedia?.url,
//                   platform: "tokopedia",
//                   item_type: "keyboard",
//                 });
//                 if (data?.affiliate_link_tokopedia?.url !== undefined) {
//                   setTokopediaWarningOpened(true);
//                 }
//               }}
//               className={
//                 data?.affiliate_link_tokopedia?.url === undefined
//                   ? "link-button disabled-link-button"
//                   : "link-button tokopedia"
//               }
//             >
//               <img
//                 className="fill-current w-6 h-6"
//                 style={{
//                   filter:
//                     data?.affiliate_link_tokopedia?.url === undefined
//                       ? "grayscale(100%)"
//                       : "none",
//                 }}
//                 src={TokopediaPng}
//                 alt="tokopedia"
//               />
//             </button>
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => {
//                 posthog.capture("Affiliate Link Clicked", {
//                   item_name: data?.keyboard_name,
//                   affiliate_link: data?.affiliate_link?.url,
//                   platform: "shopee",
//                   item_type: "mousepad",
//                 });
//               }}
//               href={data?.affiliate_link?.url}
//               className={
//                 data?.affiliate_link?.url === undefined
//                   ? "link-button disabled-link-button"
//                   : "link-button shopee"
//               }
//             >
//               <ShopeeSvg className="fill-current w-6 h-6" />
//             </a>

//             <a
//               href={data?.review_content_embed?.embed_url}
//               onClick={() => {
//                 posthog.capture("Tiktok Link Clicked", {
//                   mouse_name: data?.keyboard_name,
//                   tiktok_link: data?.review_content_embed?.embed_url,
//                   item_type: "keyboard",
//                 });
//               }}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={
//                 data?.review_content_embed?.embed_url === undefined
//                   ? "link-button disabled-link-button"
//                   : "link-button tiktok"
//               }
//             >
//               <TiktokSvg className="fill-current w-6 h-6" />
//             </a>
//           </div>
//         </div>
//       </motion.div>
// }
