import React, { useState } from 'react';
import url from '../axios';
import { useNavigate } from 'react-router-dom';


const UploadMaterial = () => {
  const [file, setFile] = useState(null);
  const [Class, setClass] = useState('');
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [resources, setResources] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  const subjectsByClass = {
    '9': ['Math', 'Science', 'English', 'Social Studies'],
    '10': ['Math', 'Science', 'English', 'History'],
    '11': ['Math', 'Physics', 'Chemistry', 'Biology'],
    '12': ['Math', 'Physics', 'Chemistry', 'English'],
  };

  const chaptersBySubject = {
    Math: ['Chapter 1: Algebra', 'Chapter 2: Geometry', 'Chapter 3: Trigonometry'],
    Science: ['Chapter 1: Physics', 'Chapter 2: Chemistry', 'Chapter 3: Biology'],
    English: ['Chapter 1: Grammar', 'Chapter 2: Literature', 'Chapter 3: Writing'],
    History: ['Chapter 1: Ancient History', 'Chapter 2: Medieval History', 'Chapter 3: Modern History'],
    Physics: ['Chapter 1: Mechanics', 'Chapter 2: Optics', 'Chapter 3: Thermodynamics'],
    Chemistry: ['Chapter 1: Organic', 'Chapter 2: Inorganic', 'Chapter 3: Physical Chemistry'],
    Biology: ['Chapter 1: Cell Biology', 'Chapter 2: Genetics', 'Chapter 3: Ecology'],
  };

  const resourceOptions = ['PYQs', 'Practice Questions'];
  const typeOptions = ['Problems', 'Solutions'];


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('Class', Class);
    formData.append('subject', subject);
    formData.append('chapter', chapter);
    formData.append('resources', resources);
    formData.append('type', type);

    try {
      setIsUploading(true);
      const response = await url.post('/api/v1/material/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Uploaded Successfully');
      setIsSuccess(true);

      setClass('');
      setSubject('');
      setChapter('');
      setResources('');
      setType('');
      setFile(null);
      e.target.reset();
    } catch (error) {
      setMessage('Error uploading material');
      setIsSuccess(false);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8">

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full mt-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Upload Subject Material</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Class:</label>
            <select
              value={Class}
              onChange={(e) => {
                setClass(e.target.value);
                setSubject('');
                setChapter('');
              }}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
            >
              <option value="">Select Class</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Subject:</label>
            <select
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setChapter('');
              }}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
              disabled={!Class}
            >
              <option value="">Select Subject</option>
              {Class && subjectsByClass[Class]?.map((subj, index) => (
                <option key={index} value={subj}>{subj}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Chapter:</label>
            <select
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
              disabled={!subject}
            >
              <option value="">Select Chapter</option>
              {subject && chaptersBySubject[subject]?.map((ch, index) => (
                <option key={index} value={ch}>{ch}</option>
              ))}
            </select>
          </div>

         
          <div>
            <label className="block text-lg font-medium text-gray-700">Resources:</label>
            <select
              value={resources}
              onChange={(e) => setResources(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
              disabled={!chapter}
            >
              <option value="">Select Resource</option>
              {resourceOptions.map((res, index) => (
                <option key={index} value={res}>{res}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
              disabled={!resources}
            >
              <option value="">Select Type</option>
              {typeOptions.map((typeOption, index) => (
                <option key={index} value={typeOption}>{typeOption}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Upload File:</label>
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
            {isUploading ? 'Uploading...' : 'Upload'}
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