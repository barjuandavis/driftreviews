import * as prismic from "@prismicio/client";
const repositoryName = "https://barjuandavis.cdn.prismic.io/api/v2";
const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.VITE_PRISMIC_PERMANENT_TOKEN,
});

export interface Post {
  id: string;
  first_publication_date: string;
  last_publication_date: string;
  lang: string;
  data: unknown;
}

export interface KeyboardPost extends Post {
  data: Keyboard;
}

export interface MousePost extends Post {
  data: Mouse;
}

export interface MousepadPost extends Post {
  data: Mousepad;
}

export type PrismicImage = {
  dimensions: { width: number; height: number };
  alt: string;
  copyright: string | null;
  url: string;
};

export type ReviewContentEmbed = {
  provider_name: string;
  provider_url: string;
  version: string;
  type: string;
  title: string;
  author_url: string;
  author_name: string;
  width: string;
  height: string;
  html: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url: string;
  author_unique_id: string;
  embed_product_id: string;
  embed_type: string;
  embed_url: string;
};

export type Brand = {
  id: string;
  type: string;
  tags: string[];
  lang: string;
  slug: string;
  first_publication_date: string;
  last_publication_date: string;
  link_type: string;
  isBroken: boolean;
};

export type AffiliateLink = {
  link_type: string;
  url: string;
  target: string;
};

export type Mouse = {
  size: string;
  rank: string;
  brand: Brand;
  mouse_name_short: string;
  mouse_shape_type: string;
  price_range: string;
  value_rating: string;
  mouse_name: string[];
  mouse_image: PrismicImage;
  short_description: string;
  long_description: string[];
  review_content_embed: ReviewContentEmbed;
  affiliate_link: AffiliateLink;
  affiliate_link_tokopedia: AffiliateLink;
  body: string[];
};

export type Mousepad = {
  rank: string;
  brand: Brand;
  mousepad_name: string;
  price_range: string;
  value_rating: string;
  static_friction: string;
  dynamic_friction: string;
  stickiness: string;
  height: number;
  width: number;
  thickness: number;
  mousepad_image: PrismicImage;
  short_description: string;
  review_content_embed: ReviewContentEmbed;
  affiliate_link: AffiliateLink;
  affiliate_link_tokopedia: AffiliateLink;
};

export type Keyboard = {
  keyboard_image: PrismicImage;
  keyboard_name: string;
  keyboard_size: string;
  keyboard_keycaps_bawaan: string;
  keyboard_switch: string;
  keyboard_case: string;
  keyboard_koneksi: string;
  is_rapid_trigger: boolean;
  rank: string;
  brand: Brand;
  price_range: string;
  value_rating: string;
  review_content_embed: ReviewContentEmbed;
  affiliate_link: AffiliateLink;
  affiliate_link_tokopedia: AffiliateLink;
  body: string[];
};

export const getAllItemByType = async (type: string) => {
  const prismicDoc = await client.getAllByType(type);
  const doc = prismicDoc.map((doc) => {
    return {
      id: doc.id,
      first_publication_date: doc.first_publication_date,
      last_publication_date: doc.last_publication_date,
      lang: doc.lang,
      data: doc.data,
    };
  });
  return doc;
};

export const getAllMouse = async () => {
  const prismicDoc = (await getAllItemByType("mouse")) as MousePost[];
  return prismicDoc;
};

export const getAllMousepad = async () => {
  const prismicDoc = (await getAllItemByType("mousepad")) as MousepadPost[];
  return prismicDoc;
};
