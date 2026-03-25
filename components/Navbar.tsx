'use client';
import Link from 'next/link';
import { Menu, X, Scissors, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/store/useCart';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const links = [
    { name: 'Послуги', href: '/posluhy/site-dlya-salonu-krasy' },
    { name: 'Функціонал', href: '/functional' },
    { name: 'Портфоліо', href: '/portfolio' },
    { name: 'Ціни', href: '/pricing' },
    { name: 'Блог', href: '/blog' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl tracking-tight">BeautyWeb</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/checkout" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            <Link href="/contacts" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
              Замовити консультацію
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}