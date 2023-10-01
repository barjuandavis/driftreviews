import * as prismic from "@prismicio/client";
import fetch from "node-fetch";

const repositoryName = "https://barjuandavis.cdn.prismic.io/api/v2";
const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.PRISMIC_PERMANENT_TOKEN,
  fetch,
});

export const initPrismic = async () => {
  const prismicDoc = await client.getFirst();
  console.log(prismicDoc);
  const { mouse_name, rank } = prismicDoc.data;
  const titleHTML = prismic.asHTML(mouse_name);
  const descriptionHTML = rank as string;
  console.log(titleHTML, descriptionHTML);
};
