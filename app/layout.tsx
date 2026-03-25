import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'BeautyWeb - Створення сайтів для перукарень та салонів краси',
  description: 'Професійна розробка сайтів для б\'юті-індустрії в Україні. Онлайн-запис, CRM, мобільна адаптація.',
  alternates: {
    canonical: 'https://beautyweb.com.ua',
    languages: {
      'uk-UA': 'https://beautyweb.com.ua',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}