import React, { useState } from 'react';
import url from '../axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const StudentDashboard = () => {
  const { t } = useTranslation(); // Hook to access translations
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [materials, setMaterials] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const subjectOptions = {
    9: [t('subjects.hindi'), t('subjects.english'), t('subjects.science'), t('subjects.socialScience'), t('subjects.math'), t('subjects.homeScience'), t('subjects.sanskrit'), t('subjects.urdu'), t('subjects.drawing')],
    10: [t('subjects.hindi'), t('subjects.english'), t('subjects.science'), t('subjects.socialScience'), t('subjects.math'), t('subjects.homeScience'), t('subjects.sanskrit'), t('subjects.urdu'), t('subjects.drawing')],
    11: [t('subjects.physics'), t('subjects.chemistry'), t('subjects.math'), t('subjects.biology'), t('subjects.hindi'), t('subjects.history'), t('subjects.civics'), t('subjects.sociology'), t('subjects.economics'), t('subjects.urdu'), t('subjects.sanskrit'), t('subjects.homeScience'), t('subjects.english'), t('subjects.pedagogy')],
    12: [t('subjects.hindi'), t('subjects.history'), t('subjects.civics'), t('subjects.sociology'), t('subjects.economics'), t('subjects.urdu'), t('subjects.sanskrit'), t('subjects.homeScience'), t('subjects.english'), t('subjects.pedagogy')],
   };

   const typeOptions = [t('types.problems'), t('types.solutions')];

  const handleLogoutClick = () => {
    navigate('/logout');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await url.get('/api/v1/material', {
        params: {
          Class: selectedClass,
          subject: selectedSubject,
          type: selectedType,
        },
      });

      if (response.data && response.data.length > 0) {
        setMaterials(response.data);
      } else {
        setMessage(t('studentDashboard.noMaterialFound'));
        setMaterials([]);
      }
    } catch (error) {
      console.error('Error retrieving material:', error);
      setMessage(t('studentDashboard.noMaterialFound'));
      setMaterials([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10 relative">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">{t('studentDashboard.title')}</h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow-lg rounded-xl p-10 max-w-xl w-full">
        <div>
          <label className="block text-lg font-medium text-gray-700">{t('studentDashboard.class')}:</label>
          <select
            value={selectedClass}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setSelectedSubject('');
            }}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
          >
            <option value="">{t('studentDashboard.selectClass')}</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">{t('studentDashboard.subject')}:</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
            disabled={!selectedClass}
          >
            <option value="">{t('studentDashboard.selectSubject')}</option>
            {selectedClass &&
              subjectOptions[selectedClass]?.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">{t('studentDashboard.type')}:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
          >
            <option value="">{t('studentDashboard.selectType')}</option>
            {typeOptions.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
        >
          {t('studentDashboard.submit')}
        </button>
      </form>

      <button
        onClick={handleLogoutClick}
        className="min-w-[120px] mt-8 py-2 px-4 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300"
      >
        {t('studentDashboard.logout')}
      </button>

      {materials.length > 0 && (
        <div className="mt-8">
          <p className="text-lg font-semibold">{t('studentDashboard.materialsFound')}</p>
          {materials.map((material, index) => (
            <div key={index}>
              <a
                href={material}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
              >
                {`${t('studentDashboard.clickToDownload')} ${index + 1}`}
              </a>
            </div>
          ))}
        </div>
      )}

      {message && <p className="text-red-500 mt-6">{message}</p>}
    </div>
  );
};

export default StudentDashboard;





