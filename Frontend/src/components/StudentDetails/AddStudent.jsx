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
        if (!formData.fullName) {
            newErrors.fullName = 'Full Name is required';
        }
        if (!formData.Rollno) {
            newErrors.Rollno = 'Rollno is required';
        }
        if (!formData.Class) {
            newErrors.Class = 'Class is required';
        }
        if (!formData.dob) {
            newErrors.dob = 'date of birth is required';
        }
        if (!formData.address) {
            newErrors.address = 'Address is required';
        }
        if (!formData.guardianName) {
            newErrors.guardianName = 'Guardian Name is required';
        }
        if (!formData.phoneNo) {
            newErrors.phoneNo = 'Phone Number is required';
        }
        if (!formData.yearofAdmission) {
            newErrors.yearofAdmission = 'Date of Admission is required';
        }

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
                setSubmitStatus(`failed`);
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-8"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Add New Student
                </h2>

                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Full Name"
                        required
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="Rollno" className="block text-gray-700 font-medium mb-2">
                        Roll No
                    </label>
                    <input
                        type="text"
                        id="Rollno"
                        name="Rollno"
                        value={formData.Rollno}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Roll No"
                        required
                    />
                    {errors.Rollno && <p className="text-red-500 text-sm">{errors.Rollno}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email (optional)
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="Class" className="block text-gray-700 font-medium mb-2">
                        Class
                    </label>
                    <input
                        type="number"
                        id="Class"
                        name="Class"
                        value={formData.Class}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Class"
                        required
                    />
                    {errors.Class && <p className="text-red-500 text-sm">{errors.Class}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Date of Birth"
                        required
                    />
                    {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Address"
                        required
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="guardianName" className="block text-gray-700 font-medium mb-2">
                        Guardian Name
                    </label>
                    <input
                        type="text"
                        id="guardianName"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Guardian Name"
                        required
                    />
                    {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-2">
                        Phone No.
                    </label>
                    <input
                        type="number"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                        placeholder="Phone no"
                        required
                    />
                    {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="dateofAdmission" className="block text-gray-700 font-medium mb-2">
                        Year of Admission
                    </label>
                    <input
                        type="year"
                        id="dateofAdmission"
                        name="yearofAdmission"
                        value={formData.yearofAdmission}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                    />
                    {errors.yearofAdmission && <p className="text-red-500 text-sm">{errors.yearofAdmission}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105"
                >
                    Submit
                </button>

                {submitStatus === 'loading' && (
                    <p className="text-blue-500 mt-4">Submitting...</p>
                )}
                {submitStatus === 'successfully student added' && (
                    <p className="text-green-500 mt-4">Student Added Successfully</p>
                )}
                {submitStatus === 'failed' && (
                    <p className="text-red-500 mt-4">Student with this rollno and class is already added</p>
                )}
            </form>
        </div>
    );
}

export default AddStudent;


