import {
  StaticImageData,
  StaticImport
} from 'next/dist/shared/lib/get-img-props';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import ChampionModal from './champion-modal';
import ChampionCard from './champion-card';

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
      <DialogTrigger>
        <ChampionCard
          championName={championName}
          championImage={championImage}
        />
      </DialogTrigger>

      <DialogContent className="overflow-hidden">
        <ChampionModal
          championCounters={championCounters}
          championGoodAgainst={championGoodAgainst}
          championSynergy={championSynergy}
        />
      </DialogContent>
    </Dialog>
  );
}
