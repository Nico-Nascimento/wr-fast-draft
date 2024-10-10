import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const fontFreljord = localFont({
  src: './fonts/Ice kingdom - Bold - Por Kustren.ttf',
  variable: '--font-freljord'
});

export const metadata: Metadata = {
  title: 'WR Fast Draft',
  description: 'Faça o draft mais rápido de todos os tempos!'
};

export const viewport: Viewport = {
  themeColor: '#000000'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontFreljord.variable} font-freljord`}>
        {children}
      </body>
    </html>
  );
}
