import React, { useState } from 'react';
import url from '../axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UploadMaterial = () => {
  const { t } = useTranslation();  // useTranslation hook
  const [file, setFile] = useState(null);
  const [Class, setClass] = useState('');
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  // Translate subjects using keys for different classes
  const subjectsByClass = {
    9: [t('subjects.hindi'), t('subjects.english'), t('subjects.science'), t('subjects.socialScience'), t('subjects.math'), t('subjects.homeScience'), t('subjects.sanskrit'), t('subjects.urdu'), t('subjects.drawing')],
    10: [t('subjects.hindi'), t('subjects.english'), t('subjects.science'), t('subjects.socialScience'), t('subjects.math'), t('subjects.homeScience'), t('subjects.sanskrit'), t('subjects.urdu'), t('subjects.drawing')],
    11: [t('subjects.physics'), t('subjects.chemistry'), t('subjects.math'), t('subjects.biology'), t('subjects.hindi'), t('subjects.history'), t('subjects.civics'), t('subjects.sociology'), t('subjects.economics'), t('subjects.urdu'), t('subjects.sanskrit'), t('subjects.homeScience'), t('subjects.english'), t('subjects.pedagogy')],
    12: [t('subjects.hindi'), t('subjects.history'), t('subjects.civics'), t('subjects.sociology'), t('subjects.economics'), t('subjects.urdu'), t('subjects.sanskrit'), t('subjects.homeScience'), t('subjects.english'), t('subjects.pedagogy')],
  };

  const typeOptions = [t('types.problems'), t('types.solutions')];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('Class', Class);
    formData.append('subject', subject);
    formData.append('type', type);

    try {
      setIsUploading(true);
      const response = await url.post('/api/v1/material/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(t('uploadMaterial.successMessage')); // Use translation
      setIsSuccess(true);

      // Reset the form
      setClass('');
      setSubject('');
      setType('');
      setFile(null);
      e.target.reset();
    } catch (error) {
      setMessage(t('uploadMaterial.errorMessage')); // Use translation
      setIsSuccess(false);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full mt-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">{t('uploadMaterial.title')}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">{t('uploadMaterial.class')}:</label>
            <select
              value={Class}
              onChange={(e) => {
                setClass(e.target.value);
                setSubject(''); // Reset subject when class changes
              }}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
            >
              <option value="">{t('uploadMaterial.selectClass')}</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">{t('uploadMaterial.subject')}:</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
              disabled={!Class}
            >
              <option value="">{t('uploadMaterial.selectSubject')}</option>
              {Class && subjectsByClass[Class]?.map((subj, index) => (
                <option key={index} value={subj}>{subj}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">{t('uploadMaterial.type')}:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
            >
              <option value="">{t('uploadMaterial.selectType')}</option>
              {typeOptions.map((typeOption, index) => (
                <option key={index} value={typeOption}>{typeOption}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">{t('uploadMaterial.uploadFile')}:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-2 block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            disabled={isUploading}
          >
            {isUploading ? t('uploadMaterial.uploading') : t('uploadMaterial.upload')}
          </button>
        </form>

        {message && (
          <p className={`text-center text-lg mt-6 font-semibold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {isSuccess ? '✔️ ' : '❌ '}
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadMaterial;



