import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        {/* Main Content Section */}
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          We are here to assist you with any inquiries. Feel free to reach out to us through any of the following means.
        </p>

        {/* Right Section: Contact Details (aligned vertically) */}
        <div className="flex flex-col items-center space-y-6 text-lg">
          {/* Postal Code */}
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md w-full">
            <span className="mr-4 text-2xl">📍</span> {/* Map/Location Symbol */}
            <span>Postal Code: 212653</span> {/* Replace with actual postal code */}
          </div>

          {/* Email */}
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md w-full">
            <span className="mr-4 text-2xl">✉️</span> {/* Email Symbol */}
            <span>Email: contact@school.com</span> {/* Replace with actual email */}
          </div>

          {/* Telephone Number */}
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md w-full">
            <span className="mr-4 text-2xl">📞</span> {/* Phone Symbol */}
            <span>Telephone: (123) 456-7890</span> {/* Replace with actual phone number */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
