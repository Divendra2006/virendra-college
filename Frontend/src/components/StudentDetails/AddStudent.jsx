import React, { useState } from 'react';
import url from '../axios';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function AddStudent() {
    const { t } = useTranslation(); // Initialize translation hook

    const [formData, setFormData] = useState({
        fullName: '',
        Rollno: '',
        email: '',
        Class: '',
        password: '',
        dob: '',
        address: '',
        guardianName: '',
        phoneNo: '',
        yearofAdmission: '',
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = t('addStudent.fullName.error'); // Use translation
        if (!formData.Rollno) newErrors.Rollno = t('addStudent.rollNo.error'); // Use translation
        if (!formData.Class) newErrors.Class = t('addStudent.class.error'); // Use translation
        if (!formData.dob) newErrors.dob = t('addStudent.dob.error'); // Use translation
        if (!formData.address) newErrors.address = t('addStudent.address.error'); // Use translation
        if (!formData.guardianName) newErrors.guardianName = t('addStudent.guardianName.error'); // Use translation
        if (!formData.phoneNo) newErrors.phoneNo = t('addStudent.phoneNo.error'); // Use translation
        if (!formData.yearofAdmission) newErrors.yearofAdmission = t('addStudent.yearOfAdmission.error'); // Use translation
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            setErrors({});
            setSubmitStatus('loading');

            try {
                const response = await url.post('/api/v1/students/addStudent', formData);
                setSubmitStatus('successfully student added');
            } catch (error) {
                setSubmitStatus('failed');
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full mt-6">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">{t('addStudent.title')}</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.fullName.label')}</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.fullName.placeholder')} // Use translation
                            required
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.rollNo.label')}</label>
                        <input
                            type="text"
                            name="Rollno"
                            value={formData.Rollno}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.rollNo.placeholder')} // Use translation
                            required
                        />
                        {errors.Rollno && <p className="text-red-500 text-sm">{errors.Rollno}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.email.label')}</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.email.placeholder')} // Use translation
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.class.label')}</label>
                        <input
                            type="number"
                            name="Class"
                            value={formData.Class}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.class.placeholder')} // Use translation
                            required
                        />
                        {errors.Class && <p className="text-red-500 text-sm">{errors.Class}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.dob.label')}</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.dob.placeholder')} // Use translation
                            required
                        />
                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.address.label')}</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.address.placeholder')} // Use translation
                            required
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.guardianName.label')}</label>
                        <input
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.guardianName.placeholder')} // Use translation
                            required
                        />
                        {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.phoneNo.label')}</label>
                        <input
                            type="number"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.phoneNo.placeholder')} // Use translation
                            required
                        />
                        {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">{t('addStudent.yearOfAdmission.label')}</label>
                        <input
                            type="year"
                            name="yearofAdmission"
                            value={formData.yearofAdmission}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder={t('addStudent.yearOfAdmission.placeholder')} // Use translation
                            required
                        />
                        {errors.yearofAdmission && <p className="text-red-500 text-sm">{errors.yearofAdmission}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                    >
                        {t('addStudent.submitButton')} {/* Use translation */}
                    </button>
                </form>

                {submitStatus === 'loading' && (
                    <p className="text-center text-lg mt-6 font-semibold text-blue-500">{t('addStudent.submitting')}</p> // Use translation
                )}
                {submitStatus === 'successfully student added' && (
                    <p className="text-center text-lg mt-6 font-semibold text-green-500">{t('addStudent.success')}</p> // Use translation
                )}
                {submitStatus === 'failed' && (
                    <p className="text-center text-lg mt-6 font-semibold text-red-500">{t('addStudent.failure')}</p> // Use translation
                )}
            </div>
        </div>
    );
}

export default AddStudent;




