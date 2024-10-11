import React, { useState } from 'react';
import url from '../axios';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedResource, setSelectedResource] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [materials, setMaterials] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const chaptersBySubject = {
    Math: ['Chapter 1: Algebra', 'Chapter 2: Geometry', 'Chapter 3: Trigonometry'],
    Science: ['Chapter 1: Physics', 'Chapter 2: Chemistry', 'Chapter 3: Biology'],
    English: ['Chapter 1: Grammar', 'Chapter 2: Literature', 'Chapter 3: Writing'],
    History: ['Chapter 1: Ancient History', 'Chapter 2: Medieval History', 'Chapter 3: Modern History'],
  };

 
  const resourceOptions = ['PYQs', 'Practice Questions'];
  const typeOptions = ['Problems', 'Solutions'];

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
          chapter: selectedChapter,
          resources: selectedResource,
          type: selectedType, 
        },
      });

      if (response.data && response.data.length > 0) {
        setMaterials(response.data); 
      } else {
        setMessage('No material found for the selected options.');
        setMaterials([]);
      }
    } catch (error) {
      console.error('Error retrieving material:', error);
      setMessage('No material found for the selected options.');
      setMaterials([]); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10 relative">

      <h1 className="text-4xl font-bold mb-10 text-gray-800">Student Dashboard</h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow-lg rounded-xl p-10 max-w-xl w-full">
        <div>
          <label className="block text-lg font-medium text-gray-700">Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setSelectedSubject('');
              setSelectedChapter('');
            }}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
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
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedChapter('');
            }}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
            disabled={!selectedClass} 
          >
            <option value="">Select Subject</option>
            {selectedClass &&
              Object.keys(chaptersBySubject).map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Chapter:</label>
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
            disabled={!selectedSubject} 
          >
            <option value="">Select Chapter</option>
            {selectedSubject &&
              chaptersBySubject[selectedSubject]?.map((chapter, index) => (
                <option key={index} value={chapter}>
                  {chapter}
                </option>
              ))}
          </select>
        </div>

      
        <div>
          <label className="block text-lg font-medium text-gray-700">Resources:</label>
          <select
            value={selectedResource}
            onChange={(e) => setSelectedResource(e.target.value)}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
            disabled={!selectedChapter} 
          >
            <option value="">Select Resource</option>
            {resourceOptions.map((resource, index) => (
              <option key={index} value={resource}>
                {resource}
              </option>
            ))}
          </select>
        </div>

       
        <div>
          <label className="block text-lg font-medium text-gray-700">Type:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            required
            disabled={!selectedResource} 
          >
            <option value="">Select Type</option>
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
          Submit
        </button>
      </form>

      <button
        onClick={handleLogoutClick}
        className="min-w-[120px] mt-8 py-2 px-4 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300"
      >
         Logout
      </button>


      {materials.length > 0 && (
        <div className="mt-8">
          <p className="text-lg font-semibold">Materials Found:</p>
          {materials.map((material, index) => (
            <div key={index}>
              <a
                href={material}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
              >
                Click here to view/download material {index + 1}
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