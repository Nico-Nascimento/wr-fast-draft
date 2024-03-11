import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ChampionProps {
  championImage: string | StaticImport;
  championName: string;
}

export default function ChampionCard({
  championImage,
  championName,
}: ChampionProps) {
  return (
    <Card className="w-72 h-96 overflow-hidden">
      <CardContent>
        <div>
          <Image
            alt="imagem do campeão"
            src={championImage}
            height={1000}
            width={1000}
            className="w-full h-full"
          />
        </div>
      </CardContent>
      <CardFooter>
        <h2 className="text-2xl font-semibold">{championName}</h2>
      </CardFooter>
    </Card>
  );
}
