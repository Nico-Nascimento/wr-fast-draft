import Image from 'next/image';
import freljord from '@/public/images/backgrounds/freljord.jpg';

export default function BackgroundImage() {
  return (
    <div className="fixed w-full h-screen">
      <div className="absolute w-full h-screen bg-gradient-to-b from-black/80 to-transparent" />

      <Image
        alt="background"
        src={freljord}
        className="w-full h-screen -z-10"
      />
    </div>
  );
}
