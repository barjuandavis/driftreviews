import * as prismic from "@prismicio/client";
import fetch from "node-fetch";

const repositoryName = "https://barjuandavis.cdn.prismic.io/api/v2";
const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.PRISMIC_PERMANENT_TOKEN,
  fetch,
});

export type MousePost = {
  id: string;
  first_publication_date: string;
  last_publication_date: string;
  lang: string;
  data: Mouse;
};

export type Mouse = {
  rank: string;
  mouse_name_short: string;
  mouse_shape_type: string;
  mouse_name: string[];
  short_description: string;
  long_description: string[];
  review_content_embed: string;
  affiliate_link: {
    link_type: string,
    url: string,
    target: string
  }
  body: any[];
};

export const getAllMouse = async () => {
  const prismicDoc = await client.getAllByType("mouse");
  console.log("this is a prismicDoc", prismicDoc);
  const doc = prismicDoc.map((doc) => {
    return {
      id: doc.id,
      first_publication_date: doc.first_publication_date,
      last_publication_date: doc.last_publication_date,
      lang: doc.lang,
      data: doc.data,
    } as MousePost;
  });
  return doc;
};
