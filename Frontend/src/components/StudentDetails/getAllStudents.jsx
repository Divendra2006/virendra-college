import React, { useState } from 'react';
import url from '../axios';
import { HiTrash } from 'react-icons/hi';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

function GetAllStudents() {
  const { t } = useTranslation(); // Initialize translation
  const [formData, setFormData] = useState({
    Class: '',
    yearofAdmission: '',
  });

  const [errors, setErrors] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [studentData, setStudentData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateErrors = () => {
    const newErrors = {};
    if (!formData.Class) {
      newErrors.Class = t('getStudents.classLabel') + ' is required'; // Use translation
    }
    if (!formData.yearofAdmission) {
      newErrors.yearofAdmission = t('getStudents.yearOfAdmissionLabel') + ' is required'; // Use translation
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateErrors();
    if (Object.keys(formErrors).length === 0) {
      setSubmitStatus('loading');
      try {
        const response = await url.get('/api/v1/students/student/Class', {
          params: {
            Class: formData.Class,
            yearofAdmission: formData.yearofAdmission,
          },
        });
        setStudentData(response.data.message.students);
        setSubmitStatus('success');
      } catch (error) {
        setStudentData('students not found');
        setSubmitStatus('failed');
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleDeleteClick = async (studentId, fullName) => {
    const isConfirmed = window.confirm(t('getStudents.deleteConfirmation', { fullName })); // Use translation
    if (!isConfirmed) return; 
    try {
      await url.delete('/api/v1/students/delete-account', { data: { studentId } });
      setStudentData(studentData.filter((student) => student._id !== studentId));
      console.log('Student deleted successfully');
    } catch (error) {
      console.log('Error deleting student:', error);
    }
  };
  
  return (
    <div className="min-h-screen pt-7 bg-gradient-to-r from-blue-50 to-blue-100 pb-10">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
        <div className="mb-6">
          <label htmlFor="Class" className="block text-sm font-medium text-gray-700 mb-2">{t('getStudents.classLabel')}</label>
          <select
            id="Class"
            name="Class"
            value={formData.Class}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">{t('getStudents.classLabel')}</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          {errors.Class && <p className="text-red-500 text-sm mt-1">{errors.Class}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="yearofAdmission" className="block text-sm font-medium text-gray-700 mb-2">{t('getStudents.yearOfAdmissionLabel')}</label>
          <select
            id="yearofAdmission"
            name="yearofAdmission"
            value={formData.yearofAdmission}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">{t('getStudents.yearOfAdmissionLabel')}</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          {errors.yearofAdmission && <p className="text-red-500 text-sm mt-1">{errors.yearofAdmission}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          {t('getStudents.submitButton')} {/* Use translation */}
        </button>

        {submitStatus === 'loading' && <p className="text-blue-600 mt-4">{t('getStudents.loading')}</p>} {/* Use translation */}
        {submitStatus === 'success' && <p className="text-green-600 mt-4">{t('getStudents.success')}</p>} {/* Use translation */}
        {submitStatus === 'failed' && <p className="text-red-600 mt-4">{t('getStudents.failed')}</p>} {/* Use translation */}
      </form>

      {studentData.length > 0 && (
        <div className="max-w-4xl mx-auto mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">{t('getStudents.studentDetails')}</h2> {/* Use translation */}
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.sNo')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.fullName')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.guardianName')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.class')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.rollNo')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.dob')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.phoneNo')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.address')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-r border-gray-300 text-left">{t('getStudents.table.yearOfAdmission')}</th> {/* Use translation */}
                <th className="py-3 px-4 border-b border-gray-300 text-left">{t('getStudents.table.actions')}</th> {/* Use translation */}
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors">
                  <td className="py-2 px-4 border-b border-r border-gray-300">{index + 1}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{student.fullName}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{student.guardianName}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{student.Class}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{student.Rollno}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{new Date(student.dob).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{student.phoneNo}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{student.address}</td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">{new Date(student.yearofAdmission).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    <HiTrash
                      className="text-red-500 hover:text-red-700 cursor-pointer inline-block"
                      onClick={() => handleDeleteClick(student._id, student.fullName)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GetAllStudents;



