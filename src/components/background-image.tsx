export default function BackgroundImage() {
  return (
    <div className="fixed w-full h-screen">
      <div className="absolute w-full h-screen bg-gradient-to-b from-black to-transparent" />

      <div className="bg-freljord-home w-full h-full -z-10" />
    </div>
  );
}
