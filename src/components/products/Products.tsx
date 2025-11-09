import CarType from './CarType';
import { useLanguage } from '@/contexts/LanguageContext';
import Luxury from '../../assets/luxury/BMW 7 Series.webp';
import Sedan from '../../assets/Sedan/toruse.webp';
import Economy from '../../assets/Econmey/Economy.png';
import Transport from '../../assets/Transport_cars/Transport Cars.png';
import backUp from '../../assets/Back/Jeep-Router.jpg';
import JeepsCars from '../../assets/GebCar/tahoe.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




export const Products = () => {
  const {t}=useLanguage();
  const carTypes = [
    {
      id: 1,
      title:'Luxury cars',
      image:Luxury,
      
      
    },
    {
      id: 2,
      title: 'Sedan cars',
      image:Sedan,
    },
    {
      id: 3,
      title: 'Economy cars',
      image:Economy,
    },
    {
      id: 4,
      title:'Transport cars',
      image:Transport,
    },
    {
      id: 5,
      title: 'Backup cars',
      image:backUp,
    },
    {
      id: 6,
      title:'Jeeps Cars',
      image:JeepsCars,
    },
  ];

  return (
    <section id='Available cars' className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
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
             textButton={t("book Now")}
              icon={<WhatsAppIcon className="w-5 h-5 mr-3 sm:w-5 sm:h-5 text-green-500" />}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};