import "./badgestyles.css";
type BadgeProps = {
  rank: string;
};

const getBadgeClassName = (rank: string) => {
  const ranks = [
    {
      name: "S Rank",
      letter: "S",
      className: "badge--s",
    },
    {
      name: "A Rank",
      letter: "A",
      className: "badge--a",
    },
    {
      name: "B Rank",
      letter: "B",
      className: "badge--b",
    },
    {
      name: "C Rank",
      letter: "C",
      className: "badge--c",
    },
    {
      name: "F Rank",
      letter: "F",
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
  return (
    rankObj ?? {
      name: "F Rank",
      letter: "F",
      className: "badge--f",
    }
  );
};

export default function RankBadge(props: BadgeProps) {
  const { rank } = props;
  const badgeClassName = getBadgeClassName(rank);
  return (
    <div className={`rank-badge ${badgeClassName.className}`}>
      <span className="letter">{badgeClassName.letter}</span>
      <span>Rank</span>
    </div>
  );
}
