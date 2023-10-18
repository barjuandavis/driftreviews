import * as prismic from "@prismicio/client";
const repositoryName = "https://barjuandavis.cdn.prismic.io/api/v2";
const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.VITE_PRISMIC_PERMANENT_TOKEN,
});

export type MousePost = {
  id: string;
  first_publication_date: string;
  last_publication_date: string;
  lang: string;
  data: Mouse;
};

export type MouseImage = {
  dimensions: { width: number; height: number };
  alt: string;
  copyright: string | null;
  url: string;
};

/**
 * ReviewContentEmbed:
 * {
      provider_name: 'TikTok',
      provider_url: 'https://www.tiktok.com',
      version: '1.0',
      type: 'video',
      title: 'Mouse PALING WORTH dari ajazzidn yang bisa kalian beli di 2023! Dan harganya... nonton sampe abis ya! Mouse ini benerbener ga ada lawan! #rekomendasi #gamingmouse #valorantindonesia #aimtraining #combatmasterfps',
      author_url: 'https://www.tiktok.com/@barjuandavis',
      author_name: 'DRiFT',
      width: '100%',
      height: '100%',
      html: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@barjuandavis/video/7238296021363707142" data-video-id="7238296021363707142" data-embed-from="oembed" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@barjuandavis" href="https://www.tiktok.com/@barjuandavis?refer=embed">@barjuandavis</a> <p>Mouse PALING WORTH dari @ajazzidn yang bisa kalian beli di 2023! Dan harganya... nonton sampe abis ya! Mouse ini benerbener ga ada lawan! <a title="rekomendasi" target="_blank" href="https://www.tiktok.com/tag/rekomendasi?refer=embed">#rekomendasi</a> <a title="gamingmouse" target="_blank" href="https://www.tiktok.com/tag/gamingmouse?refer=embed">#gamingmouse</a> <a title="valorantindonesia" target="_blank" href="https://www.tiktok.com/tag/valorantindonesia?refer=embed">#valorantindonesia</a> <a title="aimtraining" target="_blank" href="https://www.tiktok.com/tag/aimtraining?refer=embed">#aimtraining</a> <a title="combatmasterfps" target="_blank" href="https://www.tiktok.com/tag/combatmasterfps?refer=embed">#combatmasterfps</a></p> <a target="_blank" title="♬ original sound - DRiFT | Mouse & Aim Training - DRiFT" href="https://www.tiktok.com/music/original-sound-DRiFT-Mouse-Aim-Training-7238296091409271558?refer=embed">♬ original sound - DRiFT | Mouse & Aim Training - DRiFT</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      thumbnail_width: 576,
      thumbnail_height: 1024,
      thumbnail_url: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5ebc80e2e8be474b9bd470c51e3092f1_1685297136?x-expires=1697724000&x-signature=jeZ0goJMjhDsAqmHvhcE8F5WJQw%3D',
      author_unique_id: 'barjuandavis',
      embed_product_id: '7238296021363707142',
      embed_type: 'video',
      embed_url: 'https://www.tiktok.com/@barjuandavis/video/7238296021363707142'
    },
 * 
 */

export type ContentEmbed = {
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

interface ReviewContentEmbed extends ContentEmbed {}

export type Mouse = {
  rank: string;
  mouse_name_short: string;
  mouse_shape_type: string;
  mouse_name: string[];
  mouse_image: MouseImage;
  short_description: string;
  long_description: string[];
  review_content_embed: ReviewContentEmbed;
  affiliate_link: {
    link_type: string;
    url: string;
    target: string;
  };
  body: string[];
};

export const getAllMouse = async () => {
  const prismicDoc = await client.getAllByType("mouse");
  const doc = prismicDoc.map((doc) => {
    return {
      id: doc.id,
      first_publication_date: doc.first_publication_date,
      last_publication_date: doc.last_publication_date,
      lang: doc.lang,
      data: doc.data,
    };
  });
  return doc as MousePost[];
};
