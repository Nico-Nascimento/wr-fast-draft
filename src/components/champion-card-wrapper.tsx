import ChampionCard from '@/components/champion-card';
import ChampionModal from '@/components/champion-modal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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

      <DialogContent className="overflow-hidden overflow-y-scroll scrollbar-none border-freljord-light rounded-lg max-h-[512px] max-w-xs md:max-w-xl lg:max-w-3xl">
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
