import { champions } from '@/constants/champions';
import Champion from './champion';

export default function Champions() {
  return (
    <div className="grid grid-cols-5 gap-12 p-48">
      {champions.map(champion => (
        <Champion
          key={champion.name}
          championName={champion.name}
          championImage={champion.image}
          championGoodAgainst={champion.goodAgainst}
          championWeakAgainst={champion.weakAgainst}
          championSynergy={champion.synergy}
        />
      ))}
    </div>
  );
}
