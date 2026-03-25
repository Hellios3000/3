'use client';
import { useCart } from '@/store/useCart';
import LeadForm from '@/components/LeadForm';
import { Trash2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, removeItem } = useCart();
  const total = items.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-12">Оформлення замовлення</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-6">Обрані послуги</h2>
          {items.length === 0 ? (
            <p className="text-slate-500">Ваш кошик порожній</p>
          ) : (
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-blue-600">{item.price} ₴</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
              <div className="pt-4 border-t text-2xl font-bold text-right">
                Разом: {total} ₴
              </div>
            </div>
          )}
        </div>
        <div className="bg-white border p-8 rounded-xl">
          <h2 className="text-xl font-bold mb-6">Контактні дані</h2>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}