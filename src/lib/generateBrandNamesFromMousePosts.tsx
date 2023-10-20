import { MousePost } from "@/api/prismic";

export default function generateBrandNamesFromMousePosts(
  mousePosts: MousePost[]
) {
  const brandNames: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    brandNames.add(mousePost.data.brand.tags[0]);
  });
  return brandNames;
}
