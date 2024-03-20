'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from './ui/card';
import { useState } from 'react';
import { ChampionInfoType } from '@/types/champion';

export default function ChampionCard({
  championImage,
  championName
}: ChampionInfoType) {
  const [cardHeaderEffect, setCardHeaderEffect] = useState('');
  const [cardEffect, setCardEffect] = useState('');
  const [cardImageEffect, setCardImageEffect] = useState('');
  const [cardFooterEffect, setCardFooterEffect] = useState('');

  function mouseEnterHandler() {
    setCardHeaderEffect('w-[90%] md:w-[93%] lg:w-[95%]');
    setCardEffect('rounded-b-none');
    setCardImageEffect('scale-110');
    setCardFooterEffect('pl-5 bg-[#141E37]');
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
      <div className="flex w-28 h-1 justify-center -z-10 md:w-32 lg:w-48">
        <div
          className={`relative flex bg-[#32C8FF] w-16 h-1 duration-300 md:w-18 lg:w-20 ${cardHeaderEffect}`}
        >
          <div className="absolute -left-[0.1950rem] h-2 bg-[#32C8FF] w-1 rotate-45 rounded-bl-[1.3rem] duration-300" />
          <div className="absolute -right-[0.1950rem] h-2 bg-[#32C8FF] w-1 rotate-[135deg] rounded-tl-[1.3rem] duration-300" />
        </div>
      </div>

      <Card
        className={`relative w-28 h-48 rounded-b-xl rounded-t-none border-none z-10 overflow-y-hidden duration-300 md:w-32 md:h-52 lg:w-48 lg:h-72 ${cardEffect}`}
      >
        <CardContent className="overflow-hidden h-[80%] md:h-[80%] lg:h-[85%]">
          <Image
            alt={championName}
            src={championImage}
            priority
            className={`w-full h-full duration-300 ${cardImageEffect}`}
          />
        </CardContent>

        <CardFooter
          className={`bg-[#32C8FF] h-[20%] text-secondary text-xs ${cardFooterEffect} duration-300 md:h-[20%] lg:text-base lg:h-[15%]`}
        >
          <h2 className="p-2 font-bold tracking-tighter -skew-x-[10deg] duration-300">
            {championName.toUpperCase()}
          </h2>
        </CardFooter>
      </Card>
    </div>
  );
}
