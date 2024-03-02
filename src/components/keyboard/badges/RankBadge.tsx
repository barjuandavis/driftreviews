import "./badgestyles.css";
type BadgeProps = {
  rank: string;
};

const getBadgeClassName = (rank: string) => {
  const ranks = [
    {
      name: "S",
      letter: "S",
      hasPlus: false,
      className: "badge--s",
    },
    {
      name: "A+",
      letter: "A+",
      hasPlus: true,
      className: "badge--a-plus",
    },
    {
      name: "A",
      letter: "A",
      hasPlus: false,
      className: "badge--a",
    },
    {
      name: "B+",
      letter: "B+",
      hasPlus: true,
      className: "badge--b-plus",
    },
    {
      name: "B",
      letter: "B",
      className: "badge--b",
    },
    {
      name: "C+",
      letter: "C+",
      hasPlus: true,
      className: "badge--c-plus",
    },
    {
      name: "C",
      letter: "C",
      className: "badge--c",
    },
    {
      name: "F",
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
