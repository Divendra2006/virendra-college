import React from 'react';

const teachers = [
  {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/100', // Replace with actual photo URLs
    note: 'John Doe has been teaching Mathematics for over 15 years, helping students excel in logical thinking and problem-solving skills.',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/100',
    note: 'Jane Smith is a passionate Science teacher who loves encouraging students to explore the wonders of Physics and Chemistry.',
  },
  {
    name: 'Emily Johnson',
    photo: 'https://via.placeholder.com/100',
    note: 'Emily Johnson teaches English Literature, inspiring students to discover the beauty of words and storytelling.',
  },
  {
    name: 'Michael Brown',
    photo: 'https://via.placeholder.com/100',
    note: 'Michael Brown has a knack for teaching History, helping students understand the past to shape the future.',
  },
  {
    name: 'Sarah Wilson',
    photo: 'https://via.placeholder.com/100',
    note: 'Sarah Wilson is a dedicated Art teacher who encourages creativity and self-expression in every student.',
  },
  // Add more teachers as needed
];

function About() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Chairman Section */}
      <div className="mb-10 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with chairman's photo URL
          alt="Chairman"
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-blue-700">Virendra Singh</h2>
          <p className="text-lg font-bold text-gray-500">Chairman</p>
          <p className="text-gray-700 mt-2">
            Our Chairman, Mr. Virendra Singh, has been leading the school for over two decades with a vision to
            provide quality education and build a foundation for future leaders. His commitment to holistic learning
            and personal growth has driven our school's continuous success and community development.
          </p>
        </div>
      </div>

      {/* Principal Section */}
      <div className="mb-10 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with principal's photo URL
          alt="Principal"
          className="w-32 h-32 object-cover rounded-full border-4 border-green-600 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-green-700">Mukhatar Ansari</h2>
          <p className="text-lg font-bold text-gray-500">Principal</p>
          <p className="text-gray-700 mt-2">
            Our Principal, Mr. Mukhatar Ansari, fosters a culture of academic excellence and personal
            development. Under his leadership, the school has implemented modern teaching methodologies
            and fostered a nurturing environment that helps students thrive academically and socially.
          </p>
        </div>
      </div>

      {/* Administrative Assistant Section */}
      <div className="mb-10 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with administrative assistant's photo URL
          alt="Administrative Assistant"
          className="w-32 h-32 object-cover rounded-full border-4 border-purple-600 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-purple-700">Mahendra Kumar</h2>
          <p className="text-lg font-bold text-gray-500">Administrative Assistant</p>
          <p className="text-gray-700 mt-2">
            Mr. Mahendra Kumar plays a crucial role in our school, managing administrative tasks and ensuring that 
            the school runs smoothly. His dedication to student support and organization makes him an invaluable member 
            of our team.
          </p>
        </div>
      </div>

      {/* Meet Our Teachers Section */}
      <div>
        <h2 className="text-4xl font-semibold text-center mb-12 text-blue-700">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-300 shadow-md"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{teacher.name}</h3>
              <p className="text-gray-600 text-center">{teacher.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;