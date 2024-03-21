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

      <DialogContent className="overflow-hidden border-none max-h-[512px]">
        <ChampionModal
          championGoodAgainst={championGoodAgainst}
          championWeakAgainst={championWeakAgainst}
          championSynergy={championSynergy}
        />
      </DialogContent>
    </Dialog>
  );
}
