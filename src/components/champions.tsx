import ChampionsAlphabeticalOrder from './champions-alphabetical-order';

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
    </div>
  );
}
