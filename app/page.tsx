'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Smartphone } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Ваш салон краси заслуговує на <span className="text-blue-400">ідеальний сайт</span>
            </h1>
            <p className="text-xl text-slate-300">
              Залучайте більше клієнтів за допомогою сучасного сайту з онлайн-записом та CRM-інтеграцією.
            </p>
            <div className="flex gap-4">
              <Link href="/pricing" className="bg-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition">
                Переглянути ціни
              </Link>
              <Link href="/portfolio" className="border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                Наші роботи
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Розрахувати вартість</h3>
            <LeadForm />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Чому обирають нас?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { icon: CheckCircle, title: "Онлайн-запис", desc: "Клієнти бронюють послуги 24/7" },
              { icon: Zap, title: "Швидкість", desc: "Завантаження менше ніж за 2 секунди" },
              { icon: Smartphone, title: "Mobile-first", desc: "Ідеально виглядає на смартфонах" },
              { icon: Shield, title: "Безпека", desc: "Захист даних та SSL сертифікат" }
            ].map((f, i) => (
              <div key={i} className="p-6 text-center">
                <f.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">{f.title}</h4>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}