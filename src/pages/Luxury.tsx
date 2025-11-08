import { useLanguage } from "@/contexts/LanguageContext";
import CarType from "@/components/products/CarType";
import { Calendar } from "lucide-react";
import Audi from "../assets/luxury/Audi.png";
import BMW from "../assets/luxury/BMW 7 Series.png";
import Mercedes_C180 from "../assets/luxury/Mercedes C180.png";
import Mercedes_E200 from "../assets/luxury/Mercedes E200.png";
import Mercedes_S450 from "../assets/luxury/Mercedes S450.png";
import Rolls_Royce from "../assets/luxury/Rolls-Royce Phantom.png";
import Mercedes_Benz from "../assets/Mercedes-Benz.jpg";
import LandRover from "../assets/luxury/Land Rover.png";
import Cadillac from "../assets/luxury/Cadillac.png";
import Bentley_GT from "../assets/luxury/Bentley Continental GT.png";
import RollsRoyce from "../assets/luxury/Rolls_Royce.jpg";
import { Form } from "@/components/Form";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const LuxuryPage = () => {
  const message = encodeURIComponent('مرحباً! أود الاستفسار عن تأجير السيارات.');
  const { t } = useLanguage();
  const carTypes = [
    { id: 1, title: "Audi", image: Audi },
    { id: 2, title: "BMW 7 Series", image: BMW },
    { id: 3, title: "Land Rover", image:LandRover},
    { id: 4, title: "Cadillac", image:Cadillac},
    { id: 5, title: "Bentley Continental GT", image:Bentley_GT},
    { id: 6, title: "Mercedes C180", image: Mercedes_C180 },
    { id: 7, title: "Mercedes E200", image: Mercedes_E200 },
    { id: 8, title: "Mercedes S450", image: Mercedes_S450 },
    { id: 9, title: "Rolls-Royce Phantom", image: Rolls_Royce },
    { id: 10, title: "Rolls-Royce", image:RollsRoyce},
    { id: 11, title: "Mercedes Benz", image: Mercedes_Benz },
  ];

  return (
    <section className="mt-12 md:mt-7 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 text-red-700 dark:text-red-600">
            {t("Luxury cars")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("A range of luxury cars available from our")}
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
              link={`https://wa.me/+966554118873?text=${message}`}
              target="_blank"
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex items-center justify-center flex-col mt-24 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-red-700 dark:text-red-600">
          {t("Contact Us")}
        </h2>

        <div id="contact" className="w-full sm:w-[50%]">
          <Form />
        </div>
      </div>

      {/* back to Home */}

      <div className="flex items-center justify-center">
        <Link
          to="/"
          className="flex items-center justify-center 
              mt-14 bg-blue-900 text-white w-fit p-3 rounded-xl font-semibold
               hover:bg-blue-600 duration-300 transition-all gap-1 hover:scale-105"
        >
           <ArrowRightAltIcon />
          <span>{t("Go To Home")}</span>
         
        </Link>
      </div>
    </section>
  );
};
