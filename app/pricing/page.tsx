'use client';
import { useCart } from '@/store/useCart';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const { addItem } = useCart();

  const plans = [
    { id: 'start', name: 'Старт', price: 4500, features: ['Шаблонний дизайн', 'Онлайн-запис', 'Адаптація під мобільні', 'Базове SEO'] },
    { id: 'business', name: 'Бізнес', price: 12000, features: ['Унікальний дизайн', 'CRM інтеграція', 'Система лояльності', 'Копірайтинг текстів'] },
    { id: 'vip', name: 'VIP', price: 25000, features: ['Індивідуальна розробка', 'Мобільний додаток', 'Підтримка 24/7', 'Маркетингова стратегія'] }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Прозорі ціни без прихованих платежів</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="border p-8 rounded-2xl flex flex-col hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">від {plan.price} ₴</div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="text-green-500 h-5 w-5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => addItem({ id: plan.id, name: plan.name, price: plan.price })}
                className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition"
              >
                Додати у замовлення
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}