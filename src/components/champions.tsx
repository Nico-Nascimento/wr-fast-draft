import { ArrowRight } from 'lucide-react';
import ChampionsAlphabeticalOrder from './champions-alphabetical-order';
import Link from 'next/link';

export default function Champions() {
  return (
    <div className="w-full text-freljord">
      <div className="relative max-w-fit m-auto py-10 md:px-48">
        <h1 className="text-3xl text-center text-gradient-freljord md:text-5xl lg:text-7xl">
          Campeões
        </h1>

        <div className="h-1 bg-gradient-freljord rounded-full" />
      </div>

      <ChampionsAlphabeticalOrder />

      <div className="fixed right-[2%] max-sm:px-2 max-sm:rounded-full max-sm:bottom-[10%] max-sm:backdrop-blur-3xl z-50 -rotate-90 duration-1000 hover:scale-110 md:top-[50%] md:text-2xl md:hover:scale-125">
        <Link
          href="/"
          className="flex items-center justify-center md:animate-pulse"
        >
          <ArrowRight className="text-freljord-light" />

          <p className="text-gradient-freljord">Início</p>
        </Link>
      </div>
    </div>
  );
}
