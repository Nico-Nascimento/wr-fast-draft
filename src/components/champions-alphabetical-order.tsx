import Champion from '@/components/champion-card-wrapper';
import { champions } from '@/constants/champions';
import { ChampionType } from '@/types/champion';
import Link from 'next/link';

interface ChampionsByLetter {
  [key: string]: ChampionType[];
}

export default function ChampionsAlphabeticalOrder() {
  const letters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'.split('');

  const championsByLetter: ChampionsByLetter = letters.reduce((acc, letter) => {
    acc[letter] = champions
      .filter(champion => champion.name.startsWith(letter))
      .map(champion => ({
        championName: champion.name,
        championImage: champion.image,
        championGoodAgainst: champion.goodAgainst,
        championWeakAgainst: champion.weakAgainst,
        championSynergy: champion.synergy
      }));
    return acc;
  }, {} as ChampionsByLetter);

  return (
    <section className="relative w-full">
      <div className="max-sm:grid max-sm:grid-cols-13 flex w-full max-w-fit m-auto py-10 text-lg gap-2 md:gap-[10px] md:text-xl lg:gap-4 lg:text-3xl">
        {letters.map(letter => (
          <Link
            key={letter}
            href={`#${letter}`}
            className="text-gradient-freljord-light duration-300 hover:scale-125"
          >
            {letter}
          </Link>
        ))}
      </div>

      {letters.map(letter => (
        <div key={letter} id={letter}>
          <div className="m-auto max-w-[360px] md:max-w-xl lg:px-48 lg:max-w-[1536px]">
            <div className="-mb-1 text-gradient-freljord-light text-2xl md:text-3xl lg:text-4xl">
              {letter}
            </div>

            <div className="h-[1px] max-w-[10px] bg-gradient-freljord rounded-full" />
          </div>

          <div className="m-auto grid grid-cols-3 p-8 pb-20 gap-6 max-w-fit md:pb-36 md:gap-6 md:grid-cols-4 lg:px-48 lg:gap-12 lg:grid-cols-5">
            {championsByLetter[letter].map(
              ({
                championName,
                championImage,
                championGoodAgainst,
                championWeakAgainst,
                championSynergy
              }) => (
                <Champion
                  key={championName}
                  championName={championName}
                  championImage={championImage}
                  championGoodAgainst={championGoodAgainst}
                  championWeakAgainst={championWeakAgainst}
                  championSynergy={championSynergy}
                />
              )
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
