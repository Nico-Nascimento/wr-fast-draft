import ChampionsList from '@/components/champions-list';
import { BACKGROUND } from '@/constants/backgrounds';
import { ChampionModalType } from '@/types/champion';
import Image from 'next/image';

export default function ChampionModal({
  championName,
  championGoodAgainst,
  championWeakAgainst,
  championSynergy
}: ChampionModalType) {
  return (
    <div className="relative flex flex-col gap-6 text-freljord-dark text-lg p-6">
      <Image
        src={BACKGROUND.FRELJORD_MODAL}
        alt="background"
        placeholder="blur"
        width={1600}
        height={1000}
        className="w-full h-full absolute top-0 left-0 object-cover object-left -z-20"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/25 -z-10" />

      <div className="m-auto text-2xl">{championName}</div>

      <div className="flex flex-col gap-2">
        <ChampionsList label="Forte VS" championList={championGoodAgainst} />
      </div>

      <div className="flex flex-col gap-2">
        <ChampionsList label="Fraco VS" championList={championWeakAgainst} />
      </div>

      <div className="flex flex-col gap-2">
        <ChampionsList label="Sinergia" championList={championSynergy} />
      </div>
    </div>
  );
}
