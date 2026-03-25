import Link from 'next/link';
import { Scissors, Facebook, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2 text-white">
            <Scissors className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl">BeautyWeb</span>
          </Link>
          <p className="text-sm">Створюємо діджитал-рішення, які допомагають б\'юті-майстрам заробляти більше.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Навігація</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/portfolio">Портфоліо</Link></li>
            <li><Link href="/pricing">Тарифи</Link></li>
            <li><Link href="/blog">Блог</Link></li>
            <li><Link href="/about">Про нас</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Послуги</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/posluhy/site-dlya-barbershopa">Для Барбершопів</Link></li>
            <li><Link href="/posluhy/site-dlya-salonu-krasy">Для Салонів краси</Link></li>
            <li><Link href="/posluhy/site-dlya-pryvatnoho-maystra">Для Приватних майстрів</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Контакти</h4>
          <div className="flex space-x-4 mb-4">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>
          <p className="text-sm">м. Київ, вул. Хрещатик, 1</p>
          <p className="text-sm">+380 44 123 45 67</p>
        </div>
      </div>
    </footer>
  );
}