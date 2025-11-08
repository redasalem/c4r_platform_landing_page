import { useLanguage } from '@/contexts/LanguageContext';
import CarType from '@/components/products/CarType';
import { Calendar } from 'lucide-react';



export const LuxuryPage = () => {
  const {t}=useLanguage();
  const carTypes = [
    {
      id: 1,
      title:'Luxury cars',
      image:'',
    },
    {
      id: 2,
      title: 'Sedan cars',
      image:'',
    },
    {
      id: 3,
      title: 'Economy cars',
      image:'',
    },
    {
      id: 4,
      title: 'Family cars',
      image:'',
    },
    {
      id: 5,
      title: 'Backup cars',
      image:'',
    },
    {
      id: 6,
      title:'Jeeps Cars',
      image:'',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-5">
            <span className="text-sm  font-semibold tracking-wider uppercase text-[#800020] bg-[#800020]/10 px-4 py-2 rounded-full">
            {t('Car showroom')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 text-red-700 dark:text-red-600">
           {t('Available Car Categories')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
           {t('We offer a wide range of categories to meet all needs, from economy cars to luxury vehicles.')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {carTypes.map((car) => (
            <CarType
              key={car.id}
              image={car.image}
              title={t(car.title)}
              textButton={t('book Now')}
              icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};