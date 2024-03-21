import { champions } from '@/constants/champions';
import Champion from './champion';

export default function Champions() {
  return (
    <div className="w-full text-freljord">
      <div className="relative max-w-fit m-auto md:px-48">
        <h1 className="pt-10 text-3xl text-center text-secondary font-bold md:text-5xl lg:text-7xl">
          Campeões
        </h1>

        <div className="h-1 bg-secondary rounded-full" />
      </div>

      <div className="m-auto grid grid-cols-3 p-8 gap-6 max-w-fit md:p-20 md:gap-6 md:grid-cols-4 lg:px-48 lg:gap-12 lg:grid-cols-5">
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
    </div>
  );
}
