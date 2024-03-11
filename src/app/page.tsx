import ChampionCard from "@/components/champion-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { champions } from "@/constants/champions";

export default function Home() {
  return (
    <main className="bg-primary h-screen w-full text-white p-20">
      <div>
        {champions.map((champion) => (
          <Dialog key={champion.name}>
            <DialogTrigger asChild>
              <ChampionCard
                championName={champion.name}
                championImage={champion.image}
              />
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
        ))}
      </div>
    </main>
  );
}
