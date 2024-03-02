export default function Bullets({ max = 5, num = 1 }) {
  //generate span that takes in a number and returns a span with that number of bullets
  //for example, if max is 5 and num is 3, then it should return 3 bullets with 2 empty bullets
  //if max is 5 and num is 5, then it should return 5 bullets with 0 empty bullets
  const numArray = Array.from(Array(max).keys()).map((i) => i + 1);
  return numArray.map((i) => (
    <span key={`circle-${i}`}>{i <= num ? "●" : "○"}</span>
  ));
}
