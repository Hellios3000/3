import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { slug: 'yak-promoty-salon-krasy', title: 'Як просувати салон краси у 2024 році', desc: 'Поради з маркетингу та діджиталізації для б\'юті-бізнесу.' },
    { slug: 'top-10-trends-2024', title: 'ТОП 10 трендів у дизайні сайтів для перукарень', desc: 'Що зараз подобається клієнтам та як виділитися серед конкурентів.' }
  ];

  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">Корисні статті</h1>
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold group-hover:text-blue-600 transition mb-2">{post.title}</h2>
              <p className="text-slate-600 mb-4">{post.desc}</p>
              <span className="text-blue-600 font-semibold">Читати далі →</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}