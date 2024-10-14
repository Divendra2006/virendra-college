import React from 'react';
import {useTranslation} from 'react-i18next'

function Contact() {
  const {t} = useTranslation()
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
       
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">{t("contactUs-heading")} </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
         {t("contactUs-statement")}
        </p>

  
        <div className="flex flex-col items-center space-y-6 text-lg">
         
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md w-full">
            <span className="mr-4 text-2xl">📍</span> 
            <span>{t("postal-code")} </span> 
          </div>

         
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md w-full">
            <span className="mr-4 text-2xl">✉️</span> 
            <span>{t("email")} </span> 
          </div>

          
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md w-full">
            <span className="mr-4 text-2xl">📞</span> 
            <span>{t("telephone")} </span> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
