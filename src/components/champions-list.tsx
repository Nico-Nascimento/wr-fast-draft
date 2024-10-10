import Image, { StaticImageData } from 'next/image';

interface ChampionListProps {
  label: string;
  championList: { name: string; image: StaticImageData }[];
}

export default function ChampionsList({
  label,
  championList
}: ChampionListProps) {
  return (
    <>
      <p>{label}</p>

      <span className="block w-full h-1 bg-freljord-dark rounded-full" />

      <div className="flex flex-wrap gap-2">
        {championList.map(champion => (
          <div
            key={champion.name}
            className="w-20 h-20 overflow-hidden border-[3px] border-freljord-dark rounded-lg"
          >
            <Image
              src={champion.image}
              alt={champion.name}
              placeholder="blur"
              width={162}
              height={162}
              className="w-full h-full duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </>
  );
}
