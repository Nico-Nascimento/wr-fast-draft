import { champions } from "@/constants/champions";
import Champion from "./champion";

export default function Champions() {
  return (
    <div>
      {champions.map((champion) => (
        <Champion
          key={champion.name}
          championImage={champion.image}
          championName={champion.name}
          championCounters={champion.counters}
          championGoodAgainst={champion.goodAgainst}
          championSynergy={champion.synergy}
        />
      ))}
    </div>
  );
}
