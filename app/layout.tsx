import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import { Providers } from './providers';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Confido Skills Demo',
  description: 'As a show of my skills, I have created a tech demo for a young startup called Confido Legal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
