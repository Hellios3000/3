'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Ім\'я занадто коротке'),
  phone: z.string().min(10, 'Введіть коректний номер'),
  service: z.string().min(1, 'Оберіть послугу'),
});

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) return <div className="p-8 text-center bg-green-50 rounded-xl"> Дякуємо! Ми зв\'яжемося з вами найближчим часом. </div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Ваше ім\'я</label>
        <input {...register('name')} className="w-full p-2 border rounded-md" placeholder="Олександр" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Телефон</label>
        <input {...register('phone')} className="w-full p-2 border rounded-md" placeholder="+380..." />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Тип сайту</label>
        <select {...register('service')} className="w-full p-2 border rounded-md">
          <option value="barbershop">Сайт для Барбершопа</option>
          <option value="beauty">Салон краси</option>
          <option value="solo">Приватний майстер</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
        Отримати пропозицію
      </button>
    </form>
  );
}