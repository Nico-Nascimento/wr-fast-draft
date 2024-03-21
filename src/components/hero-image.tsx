import freljordHero from '@/public/images/hero/freljord-hero.png';
import Image from 'next/image';

export default function HeroImage() {
  return (
    <div>
      <Image
        alt="image"
        src={freljordHero}
        priority
        className="relative m-auto pt-10 scale-[0.95] md:pt-16 lg:scale-[0.86]"
      />
    </div>
  );
}
