import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import ChampionCard from "./champion-card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import ChampionModal from "./champion-modal";

interface ChampionProps {
  championImage: string | StaticImport;
  championName: string;
  championCounters: { name: string; image: StaticImageData }[];
  championGoodAgainst: { name: string; image: StaticImageData }[];
  championSynergy: { name: string; image: StaticImageData }[];
}
export default function Champion({
  championImage,
  championName,
  championCounters,
  championGoodAgainst,
  championSynergy
}: ChampionProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ChampionCard
          championName={championName}
          championImage={championImage}
        />
      </DialogTrigger>

      <DialogContent>
        <ChampionModal championCounters={championCounters} championGoodAgainst={championGoodAgainst} championSynergy={championSynergy}/>
      </DialogContent>
    </Dialog>
  );
}
