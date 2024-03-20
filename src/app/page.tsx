import BackgroundImage from '@/components/background-image';
import Champions from '@/components/champions';

export default function Home() {
  return (
    <main className="h-screen w-full">
      <BackgroundImage />

      <Champions />
    </main>
  );
}
