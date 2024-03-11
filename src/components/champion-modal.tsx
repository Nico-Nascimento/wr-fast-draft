import Image, { StaticImageData } from "next/image";

interface ChampionModalProps {
  championCounters: { name: string; image: StaticImageData }[];
  championGoodAgainst: { name: string; image: StaticImageData }[];
  championSynergy: { name: string; image: StaticImageData }[];
}
export default function ChampionModal({
  championCounters,
  championSynergy,
  championGoodAgainst,
}: ChampionModalProps) {
  return (
    <div className="flex flex-col gap-6 ">
      <div>
        <p className="pb-6">Counters</p>
        <div className="flex gap-2">
          {championCounters.map((champion) => (
            <div key={champion.name}>
              <Image
                alt="imagem do campeão"
                src={champion.image}
                height={1000}
                width={1000}
                className="w-20 h-20"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="pb-6">Bons Contra</p>
        <div className="flex gap-2">
          {championGoodAgainst.map((champion) => (
            <div key={champion.name}>
              <Image
                alt="imagem do campeão"
                src={champion.image}
                height={1000}
                width={1000}
                className="w-20 h-20"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="pb-6">Sinergia</p>
        <div className="flex gap-2">
          {championSynergy.map((champion) => (
            <div key={champion.name}>
              <Image
                alt="imagem do campeão"
                src={champion.image}
                height={1000}
                width={1000}
                className="w-20 h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
