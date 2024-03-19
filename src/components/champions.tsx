import { champions } from '@/constants/champions';
import Champion from './champion';

export default function Champions() {
  return (
    <div className="grid grid-cols-5 gap-12 p-48">
      {champions.map(champion => (
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
