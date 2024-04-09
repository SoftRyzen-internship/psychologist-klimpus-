import React from 'react';
import type { Metadata } from 'next';
import classNames from 'classnames';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import { Raleway, Roboto } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={classNames(
          raleway.variable,
          roboto.variable,
          'flex h-full min-h-screen flex-col bg-bgBeige',
        )}
      >
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
