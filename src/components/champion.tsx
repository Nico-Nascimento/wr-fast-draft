import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import ChampionModal from './champion-modal';
import ChampionCard from './champion-card';
import { ChampionType } from '@/types/champion';

export default function Champion({
  championName,
  championImage,
  championGoodAgainst,
  championWeakAgainst,
  championSynergy
}: ChampionType) {
  return (
    <Dialog>
      <DialogTrigger>
        <ChampionCard
          championName={championName}
          championImage={championImage}
        />
      </DialogTrigger>

      <DialogContent className="overflow-hidden overflow-y-scroll scrollbar-none border-freljord rounded-lg max-h-[512px] max-w-xs md:max-w-xl lg:max-w-3xl">
        <ChampionModal
          championName={championName}
          championGoodAgainst={championGoodAgainst}
          championWeakAgainst={championWeakAgainst}
          championSynergy={championSynergy}
        />
      </DialogContent>
    </Dialog>
  );
}
