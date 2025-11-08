import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface Props {
  image: string;
  title: string;
  textButton:string;
  link?: string;
  onClick?: () => void;
  onBookNow?: () => void;
  icon: React.ReactNode;
}

const CarType:React.FC<Props> = ({ 
  image, 
  title, 
   textButton,
  link = "#", 
  icon
}) =>{
  return (
    <div className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800">
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 dark:text-white mb-6 group-hover:text-[#800020] transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-col xs:flex-row gap-3">
          <a
            href={link}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-[#800020] to-[#a82e3e] hover:from-[#660019] hover:to-[#8a2635] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {icon}
            <span className="text-sm sm:text-base">{textButton}</span>
           
          </a>

         
        </div>
      </div>
    </div>
  )
}

export default CarType