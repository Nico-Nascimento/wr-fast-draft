'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from './ui/card';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState } from 'react';

interface ChampionProps {
  championImage: string | StaticImport;
  championName: string;
}

export default function ChampionCard({
  championImage,
  championName
}: ChampionProps) {
  const [cardHeaderEffect, setCardHeaderEffect] = useState('');
  const [cardEffect, setCardEffect] = useState('');
  const [cardImageEffect, setCardImageEffect] = useState('');
  const [cardFooterEffect, setCardFooterEffect] = useState('');

  function mouseEnterHandler() {
    setCardHeaderEffect('w-[95%]');
    setCardEffect('rounded-b-none');
    setCardImageEffect('scale-110');
    setCardFooterEffect('pl-5');
  }

  function mouseLeaveHandler() {
    setCardHeaderEffect('');
    setCardEffect('');
    setCardImageEffect('');
    setCardFooterEffect('');
  }

  return (
    <div
      onMouseEnter={() => mouseEnterHandler()}
      onMouseLeave={() => mouseLeaveHandler()}
      className="cursor-pointer"
    >
      <div className="flex w-48 h-1 justify-center -z-10">
        <div
          className={`relative flex bg-secondary w-20 h-1 duration-300 ${cardHeaderEffect}`}
        >
          <div className="absolute -left-[0.1950rem] h-2 bg-secondary w-1 rotate-45 rounded-bl-[1.3rem]" />
          <div className="absolute -right-[0.1950rem] h-2 bg-secondary w-1 rotate-[135deg] rounded-tl-[1.3rem]" />
        </div>
      </div>

      <Card
        className={`relative w-48 h-72 rounded-b-xl rounded-t-none border-none z-10 overflow-y-hidden duration-300 ${cardEffect}`}
      >
        <CardContent className="h-[85%] overflow-hidden">
          <Image
            alt="imagem do campeão"
            src={championImage}
            height={1000}
            width={1000}
            className={`w-full h-full duration-300 ${cardImageEffect}`}
          />
        </CardContent>

        <CardFooter className="bg-secondary h-[15%] text-primary">
          <h2
            className={`p-2 text-xl font-bold tracking-tighter -skew-x-[10deg] duration-300 ${cardFooterEffect}`}
          >
            {championName.toUpperCase()}
          </h2>
        </CardFooter>
      </Card>
    </div>
  );
}
