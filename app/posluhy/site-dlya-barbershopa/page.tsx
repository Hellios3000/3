'use client';
import { generateServiceSchema } from '@/lib/schema';
import LeadForm from '@/components/LeadForm';

export default function BarbershopPage() {
  const schema = generateServiceSchema('Сайт для Барбершопа', 'Професійна розробка сайту для чоловічої перукарні з агресивним дизайном та функціоналом онлайн-запису.', '8000');

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Створення сайту для Барбершопа</h1>
          <p className="text-lg text-slate-600 mb-8">
            Барбершоп — це не просто перукарня, це стиль життя. Ми створюємо сайти, які передають атмосферу вашого закладу.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"/> Брутальний та стильний дизайн</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"/> Інтеграція з Altegio / Dikidi / EasyWeek</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"/> Галерея робіт та профілі майстрів</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"/> Оптимізація під Google Maps</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Бажаєте такий сайт?</h2>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}