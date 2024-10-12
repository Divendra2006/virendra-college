import React, { useState } from 'react';
import url from '../axios';

function AddStudent() {
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
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.Rollno) newErrors.Rollno = 'Rollno is required';
        if (!formData.Class) newErrors.Class = 'Class is required';
        if (!formData.dob) newErrors.dob = 'Date of birth is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.guardianName) newErrors.guardianName = 'Guardian Name is required';
        if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
        if (!formData.yearofAdmission) newErrors.yearofAdmission = 'Date of Admission is required';
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
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Add New Student</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Full Name"
                            required
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Roll No:</label>
                        <input
                            type="text"
                            name="Rollno"
                            value={formData.Rollno}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Roll No"
                            required
                        />
                        {errors.Rollno && <p className="text-red-500 text-sm">{errors.Rollno}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Email (optional):</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Class:</label>
                        <input
                            type="number"
                            name="Class"
                            value={formData.Class}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Class"
                            required
                        />
                        {errors.Class && <p className="text-red-500 text-sm">{errors.Class}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Date of Birth:</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Date of Birth"
                            required
                        />
                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Address"
                            required
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Guardian Name:</label>
                        <input
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Guardian Name"
                            required
                        />
                        {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Phone No:</label>
                        <input
                            type="number"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Phone No"
                            required
                        />
                        {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">Year of Admission:</label>
                        <input
                            type="year"
                            name="yearofAdmission"
                            value={formData.yearofAdmission}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
                            placeholder="Year of Admission"
                            required
                        />
                        {errors.yearofAdmission && <p className="text-red-500 text-sm">{errors.yearofAdmission}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                    >
                        Submit
                    </button>
                </form>

                {submitStatus === 'loading' && (
                    <p className="text-center text-lg mt-6 font-semibold text-blue-500">Submitting...</p>
                )}
                {submitStatus === 'successfully student added' && (
                    <p className="text-center text-lg mt-6 font-semibold text-green-500">Student Added Successfully</p>
                )}
                {submitStatus === 'failed' && (
                    <p className="text-center text-lg mt-6 font-semibold text-red-500">Failed to add student</p>
                )}
            </div>
        </div>
    );
}

export default AddStudent;



