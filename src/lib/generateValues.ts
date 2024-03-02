import { MousePost } from "../api/prismic";

export function generateBrandNamesFromMousePosts(mousePosts: MousePost[]) {
  const brandNames: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    brandNames.add(mousePost.data.brand.tags[0]);
  });
  return Array.from(brandNames);
}

export function generateValueRatingsFromMousePosts(mousePosts: MousePost[]) {
  const valueRatings: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    valueRatings.add(mousePost.data.value_rating);
  });
  return Array.from(valueRatings);
}

export function generateMouseShapesFromMousePosts(mousePosts: MousePost[]) {
  const mouseShapes: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    mouseShapes.add(mousePost.data.mouse_shape_type);
  });
  return Array.from(mouseShapes);
}

export function generatePriceRangesFromMousePosts(mousePosts: MousePost[]) {
  const priceRanges: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    priceRanges.add(mousePost.data.price_range);
  });
  return Array.from(priceRanges);
}

export function generateRanksFromMousePosts(mousePosts: MousePost[]) {
  const ranks: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    ranks.add(mousePost.data.rank);
  });
  return Array.from(ranks).sort(
    (a, b) => convertRankIntoNumber(a) - convertRankIntoNumber(b),
  );
}

export function cleanUpPriceRange(range: string) {
  //every rank will have a number and close bracket in the beginning. Example: "1) Under 500 Ribu"
  //clean it
  return range.slice(3);
}

export function convertRankIntoNumber(rank: string) {
  return ["S", "A+", "A", "B+", "B", "C+", "C", "F"].indexOf(rank[0]) + 1;
}

export function generateMouseSizesFromMousePosts(mousePosts: MousePost[]) {
  const mouseSizes: Set<string> = new Set();
  mousePosts.forEach((mousePost) => {
    mouseSizes.add(mousePost.data.size);
  });
  return Array.from(mouseSizes);
}

// export function convertPriceRangeToSortableRange(range: string) {
//   //range is a string, we want to convert it to a number so we can sort it
//   //range is in bahasa with these format (see examples)
//   //"the under format": "Under XXX Ribu"
//   //the between format: "XXX Ribu - X juta"
//   //the above format: "Diatas X Juta" or "X Juta Keatas"
//   // we want to convert it to a number so we can sort it
//   //1. Find the numbers
//   const numbers = range.matchAll(
//   //2. Find the multiplier, either Ribu or Juta

// }

export const mousepadPrices = [
  "Under 100 Ribu",
  "100 Ribu - 250 Ribu",
  "250 Ribu - 500 Ribu",
  "500 - 1 Juta",
  "1 Juta Keatas",
] as const;
