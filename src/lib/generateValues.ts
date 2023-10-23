import { MousePost } from "../api/prismic";

export function generateBrandNamesFromMousePosts(mousePosts: MousePost[]) {
  const brandNames: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    brandNames.add(mousePost.data.brand.tags[0]);
  });
  return Array.from(brandNames);
}

export function generateValueRatings() {
  return ["1", "2", "3"];
}

export function generateMouseShapes() {
  return ["Ambidextrous", "Ergonomic", "Egg-shape"];
}

export function generatePriceRanges() {
  return [
    "Under 200 Ribu",
    "200 Ribu - 500 Ribu",
    "500 Ribu - 1 Juta",
    "1 Juta - 1.5 Juta",
    "1.5 Juta - 2 Juta",
    "Diatas 2 Juta",
  ];
}

export function generateRanks() {
  return ["S Rank", "A Rank", "B Rank", "C Rank", "F Rank"];
}

export function convertRankIntoNumber(rank: string) {
  //use index + 1
  return generateRanks().indexOf(rank) + 1;
}
