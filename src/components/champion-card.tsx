import Image from 'next/image';
import { Card, CardContent, CardFooter } from './ui/card';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ChampionProps {
  championImage: string | StaticImport;
  championName: string;
}

export default function ChampionCard({
  championImage,
  championName
}: ChampionProps) {
  return (
    <Card className="relative w-64 h-96 rounded-b-lg rounded-t-none z-10">
      <CardContent className="h-[85%]">
        <Image
          alt="imagem do campeão"
          src={championImage}
          height={1000}
          width={1000}
          className="w-full h-full"
        />
      </CardContent>

      <CardFooter className="bg-primary h-[15%] text-secondary">
        <h2 className="text-2xl font-semibold">{championName}</h2>
      </CardFooter>
    </Card>
  );
}
