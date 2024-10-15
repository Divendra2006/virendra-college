import React from 'react';
import { useTranslation } from 'react-i18next';

const teacherKeys = [
  'rajiv-singh',
  'anil-kumar-nirmal',
  'mohammad-ahmad',
  'naresh-kumar',
  'priyanshu-yadav',
  'sanjay-kumar',
  'santosh-kumar-srivastav',
  'sarvesh-kumar',
  'subohi-begum',
  'sulekha-devi',
  'sunil-kumar',
];

function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Chairman Section */}
      <div className="mb-10 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with chairman's photo URL
          alt="Chairman"
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-blue-700">{t('chairman-name')}</h2>
          <p className="text-lg font-bold text-gray-500">{t('chairman')}</p>
          <p className="text-gray-700 mt-2">{t('about-chairman')}</p>
        </div>
      </div>

      {/* Principal Section */}
      <div className="mb-10 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with principal's photo URL
          alt="Principal"
          className="w-32 h-32 object-cover rounded-full border-4 border-green-600 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-green-700">{t('principal-name')}</h2>
          <p className="text-lg font-bold text-gray-500">{t('principal')}</p>
          <p className="text-gray-700 mt-2">{t('about-principal')}</p>
        </div>
      </div>

      {/* Administrative Assistant Section */}
      <div className="mb-10 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with administrative assistant's photo URL
          alt="Administrative Assistant"
          className="w-32 h-32 object-cover rounded-full border-4 border-purple-600 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-purple-700">{t('administrative-assistant-name')}</h2>
          <p className="text-lg font-bold text-gray-500">{t('administrative-assistant')}</p>
          <p className="text-gray-700 mt-2">{t('about-administrative-assistant')}</p>
        </div>
      </div>

      {/* Meet Our Teachers Section */}
      <div>
        <h2 className="text-4xl font-semibold text-center mb-12 text-blue-700">{t('meet-our-teacher')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teacherKeys.map((key, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src="/Images/teacheravatar.webp" // Replace with actual teacher photo URLs
                alt={t(`teachers.${key}.name`)}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-300 shadow-md"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{t(`teachers.${key}.name`)}</h3>
              <p className="text-gray-600 text-center">{t(`teachers.${key}.note`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
