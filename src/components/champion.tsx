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
  championSynergy,
}: ChampionProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <div className="flex w-64 h-1 justify-center -z-10">
            <div className="relative flex bg-secondary w-20 h-1 hover:w-[97%] transition-all">
              <div className="absolute -left-[0.1950rem] h-2 bg-secondary w-1 rotate-45 rounded-bl-[1.3rem]" />
              <div className="absolute -right-[0.1950rem] h-2 bg-secondary w-1 rotate-[135deg] rounded-tl-[1.3rem]" />
            </div>
          </div>

          <ChampionCard
            championName={championName}
            championImage={championImage}
          />
        </div>
      </DialogTrigger>

      <DialogContent>
        <ChampionModal
          championCounters={championCounters}
          championGoodAgainst={championGoodAgainst}
          championSynergy={championSynergy}
        />
      </DialogContent>
    </Dialog>
  );
}
