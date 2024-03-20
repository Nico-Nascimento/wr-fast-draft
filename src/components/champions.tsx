import { champions } from '@/constants/champions';
import Champion from './champion';

export default function Champions() {
  return (
    <div className="grid grid-cols-3 p-8 gap-6 md:p-20 md:gap-6 md:grid-cols-4 lg:p-48 lg:gap-12 lg:grid-cols-5">
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
