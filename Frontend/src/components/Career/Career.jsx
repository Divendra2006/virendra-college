import React from 'react';

function Career() {
  const mentors = [
    {
      name: 'Divendra Yadav',
      email: 'divendrasinghyadaviit@gmail.com',
      post: 'Student at IIT BHU',
      photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
    },
    {
      name: 'Luxmi Yadav',
      email: 'bob.smith@example.com',
      post: 'Software Engineer',
      photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg mt-16 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Meet Our Career Mentors</h1>
      <h2 className="text-xl font-medium text-center text-gray-700 mb-8">
        Reach out with any career-related doubts via email!
      </h2>

      {/* Stack mentors vertically on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105"
          >
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-40 h-40 rounded-full mb-4 border-4 border-blue-300 shadow-lg"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{mentor.name}</h2>
            <h3 className="text-lg font-medium text-gray-600 mb-3">{mentor.post}</h3>
            <p className="text-gray-600 font-semibold">✉️ {mentor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;