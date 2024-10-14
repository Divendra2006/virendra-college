import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguagePromptModal = ({ onClose }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
    localStorage.setItem('preferredLanguage', lng); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center w-11/12 max-w-md transition-all transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Your Language</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => changeLanguage('en')}
            className="py-2 px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('hi')}
            className="py-2 px-6 sm:px-8 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition duration-300 ease-in-out shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            हिंदी
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePromptModal;





