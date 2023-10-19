import "./badgestyles.css";
type BadgeProps = {
  rank: string;
};

const getBadgeClassName = (rank: string) => {
  const ranks = [
    {
      name: "S Rank",
      className: "badge--s",
    },
    {
      name: "A Rank",
      className: "badge--a",
    },
    {
      name: "B Rank",
      className: "badge--b",
    },
    {
      name: "C Rank",
      className: "badge--c",
    },
    {
      name: "F Rank",
      className: "badge--f",
    },
  ];
  let rankObj;
  for (const r of ranks) {
    if (rank.includes(r.name)) {
      rankObj = r;
      break;
    }
  }
  return rankObj?.className ?? "badge--f";
};

export default function Badge(props: BadgeProps) {
  const { rank } = props;
  const badgeClassName = getBadgeClassName(rank);
  return <p className={`badge ${badgeClassName}`}>{rank}</p>;
}
