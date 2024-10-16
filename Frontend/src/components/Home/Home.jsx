import React from 'react';
import {useTranslation} from 'react-i18next'

function Home() {
  const {t} = useTranslation()
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Banner Section */}
      <div className="relative mb-16">
        <img
          src="/Images/school-banner.png" // Replace with your banner image URL
          alt="School Banner"
          className="w-full h-[60vh] lg:h-[926px] object-cover"
        />
        <h1 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          {t("schoolBannerQuote")}
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8 mb-16">
        {/* Left Side: Paragraph */}
        <div className="flex-1 p-4 text-center md:text-left">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
         {t("school-Intro-Para")}
          </p>
        </div>

        {/* Right Side: Image Below Banner */}
        <div className="w-full md:w-1/3 flex justify-center p-4">
          <img
            src="/Images/school-lab.jpg" // Replace with your right image URL
            alt="Right Image"
            className="w-full h-auto max-w-[816px] max-h-[1005px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      {/* Additional Image and Chairman's Note */}
      <div className="flex flex-col md:flex-row justify-center mb-16 gap-8 max-w-6xl mx-auto px-6">
      
        <div className="flex-1 p-4 md:w-2/3 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {t("message-heading")}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
           {t("chairman-message")}
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <img
            src="/Images/chairman2.jpg" // Replace with your left image URL
            alt="Left Image"
            className="w-full h-auto max-w-[816px] max-h-[1005px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="max-w-6xl mx-auto p-6 mb-16">
        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
          {t("quote")}
           <cite className="block mt-4 text-right text-blue-500 font-semibold">
           {t("quote-writter")}
          </cite>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;