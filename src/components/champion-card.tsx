import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChampionInfoType } from '@/types/champion';
import Image from 'next/image';

export default function ChampionCard({
  championImage,
  championName
}: ChampionInfoType) {
  return (
    <div className="cursor-pointer group">
      <div className="flex w-28 h-1 justify-center -z-10 md:w-32 lg:w-48">
        <div className="relative flex bg-freljord-light w-16 h-1 duration-300 md:w-18 lg:w-20 group-hover:md:w-[93%] group-hover:lg:w-[95%]">
          <div className="absolute -left-[0.1950rem] h-2 bg-freljord-light w-1 rotate-45 rounded-bl-[1.3rem] duration-300" />
          <div className="absolute -right-[0.1950rem] h-2 bg-freljord-light w-1 rotate-[135deg] rounded-tl-[1.3rem] duration-300" />
        </div>
      </div>

      <Card className="relative w-28 h-48 rounded-b-xl rounded-t-none border-none z-10 overflow-y-hidden duration-300 md:w-32 md:h-52 lg:w-48 lg:h-72 group-hover:md:rounded-b-none">
        <CardContent className="overflow-hidden h-[80%] md:h-[80%] lg:h-[85%]">
          <Image
            src={championImage}
            alt={championName}
            placeholder="blur"
            width={285}
            height={323}
            className="w-full h-full duration-300 group-hover:md:scale-110"
          />
        </CardContent>

        <CardFooter className="bg-freljord-light h-[20%] text-secondary text-xs group-hover:md:pl-5 group-hover:md:bg-freljord-dark duration-300 md:h-[20%] lg:text-base lg:h-[15%]">
          <h2 className="p-2 -skew-x-[10deg] duration-300">
            {championName.toUpperCase()}
          </h2>
        </CardFooter>
      </Card>
    </div>
  );
}
