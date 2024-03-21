import { ChampionModalType } from '@/types/champion';
import Image from 'next/image';
import freljordLogo from '@/public/images/backgrounds/freljord-modal.jpg'

export default function ChampionModal({
  championGoodAgainst,
  championWeakAgainst,
  championSynergy
}: ChampionModalType) {
  return (
    <div className="flex bg-freljord-logo flex-col gap-6 text-freljord-dark text-lg font-semibold p-6">
      <div className='flex flex-col gap-2'>
        <p className='box'>Forte VS</p>
        <span className='block h-1 bg-freljord-dark w-full'></span>
        <div className="flex gap-2">
          {championGoodAgainst.map(champion => (
            <div key={champion.name}>
              <Image
                alt={champion.name}
                src={champion.image}
                priority
                className="w-20 h-20 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="pb-6">Fraco VS</p>
        <div className="flex gap-2">
          {championWeakAgainst.map(champion => (
            <div key={champion.name}>
              <Image
                alt={champion.name}
                src={champion.image}
                priority
                className="w-20 h-20 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="pb-6">Sinergia</p>
        <div className="flex gap-2">
          {championSynergy.map(champion => (
            <div key={champion.name}>
              <Image
                alt={champion.name}
                src={champion.image}
                priority
                className="w-20 h-20 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
