import BackgroundImage from '@/components/background-image';
import Champions from '@/components/champions';
import HeroImage from '@/components/hero-image';

export default function Home() {
  return (
    <main className="h-screen w-full">
      <BackgroundImage />

      <HeroImage />
      <Champions />
    </main>
  );
}
