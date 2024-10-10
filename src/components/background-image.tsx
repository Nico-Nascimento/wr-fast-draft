import { BACKGROUND } from '@/constants/backgrounds';
import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div className="fixed w-full h-screen">
      <div className="absolute w-full h-screen bg-gradient-to-b from-black to-transparent" />

      <div className="w-full h-full -z-10">
        <Image
          src={BACKGROUND.FRELJORD}
          alt="background"
          placeholder="blur"
          width={2034}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
