import './globals.css';
import { Inter, Fredoka } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fredoka',
  display: 'swap',
});

export const metadata = {
  title: 'Unifome',
  description: 'O APP definitivo para seus clientes e vendas.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fredoka.variable}`}>
      <head></head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
