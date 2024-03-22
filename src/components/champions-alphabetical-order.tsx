import { champions } from '@/constants/champions';
import Champion from './champion';

export default function ChampionsAlphabeticalOrder() {
  const letters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'.split('');

  return (
    <section className="relative w-full">
      {letters.map(letter => (
        <div key={letter}>
          <div className="m-auto max-w-[360px] md:max-w-xl lg:px-48 lg:max-w-[1536px]">
            <div className="-mb-1 text-gradient-freljord text-2xl md:text-3xl lg:text-4xl">
              {letter}
            </div>

            <div className="h-[1px] max-w-[10px] bg-gradient-freljord rounded-full" />
          </div>

          <div className="m-auto grid grid-cols-3 p-8 pb-20 gap-6 max-w-fit md:pb-36 md:gap-6 md:grid-cols-4 lg:px-48 lg:gap-12 lg:grid-cols-5">
            {champions
              .filter(champion => champion.name.startsWith(letter))
              .map(champion => (
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
      ))}
    </section>
  );
}
