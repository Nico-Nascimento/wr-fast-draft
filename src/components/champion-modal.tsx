import { ChampionModalType } from '@/types/champion';
import Image from 'next/image';

export default function ChampionModal({
  championGoodAgainst,
  championWeakAgainst,
  championSynergy
}: ChampionModalType) {
  return (
    <div className="relative flex bg-freljord-logo flex-col gap-6 text-freljord text-freljord-dark text-lg p-6">
      <div className="absolute top-0 left-0 w-full h-full bg-black/25 -z-10" />

      <div className="flex flex-col gap-2">
        <p>Forte VS</p>

        <span className="block w-full h-1 bg-freljord-dark rounded-full" />

        <div className="flex flex-wrap gap-2">
          {championGoodAgainst.map(champion => (
            <div
              key={champion.name}
              className="w-20 h-20 overflow-hidden border-[3px] border-freljord-dark rounded-lg"
            >
              <Image
                alt={champion.name}
                src={champion.image}
                priority
                className="w-full h-full duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>Fraco VS</p>

        <span className="block w-full h-1 bg-freljord-dark rounded-full" />

        <div className="flex flex-wrap gap-2">
          {championWeakAgainst.map(champion => (
            <div
              key={champion.name}
              className="w-20 h-20 overflow-hidden border-[3px] border-freljord-dark rounded-lg"
            >
              <Image
                alt={champion.name}
                src={champion.image}
                priority
                className="w-full h-full duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>Sinergia</p>

        <span className="block w-full h-1 bg-freljord-dark rounded-full" />

        <div className="flex flex-wrap gap-2">
          {championSynergy.map(champion => (
            <div
              key={champion.name}
              className="w-20 h-20 overflow-hidden border-[3px] border-freljord-dark rounded-lg"
            >
              <Image
                alt={champion.name}
                src={champion.image}
                priority
                className="w-full h-full duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
