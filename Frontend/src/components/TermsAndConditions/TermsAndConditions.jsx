import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">{t('terms.title')}</h1>

      {Object.keys(t('terms.sections', { returnObjects: true })).map((key) => (
        <div key={key}>
          <h2 className="text-2xl font-semibold mt-4">{t(`terms.sections.${key}.title`)}</h2>
          <p className="text-gray-700 leading-relaxed">{t(`terms.sections.${key}.content`)}</p>

          {t(`terms.sections.${key}.list`, { returnObjects: true })?.map((item, idx) => (
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed" key={idx}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
