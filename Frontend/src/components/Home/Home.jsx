import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Banner Section */}
      <div className="relative mb-16">
        <img
          src="/Images/school-banner.png" // Replace with your banner image URL
          alt="School Banner"
          className="w-full h-[60vh] lg:h-[926px] object-cover"
        />
        <h1 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          The School That Cares
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8 mb-16">
        {/* Left Side: Paragraph */}
        <div className="flex-1 p-4 text-center md:text-left">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
          Welcome to our school, where we are deeply committed to fostering the holistic development of every child. We believe that education extends beyond textbooks and classrooms, aiming to nurture not only academic excellence but also personal growth, creativity, and emotional well-being. Our dedicated team of educators and staff work tirelessly to create a supportive and inspiring environment where every student feels valued and empowered.

Through innovative teaching methods, comprehensive programs, and personalized attention, we ensure that each student receives the guidance and encouragement they need to excel. Whether it's in the classroom, on the sports field, or in extracurricular activities, we strive to cultivate a well-rounded experience that helps students discover their passions and strengths. Our goal is to equip them with the skills and confidence to navigate challenges and succeed in all aspects of life.

          </p>
        </div>

        {/* Right Side: Image Below Banner */}
        <div className="w-full md:w-1/3 flex justify-center p-4">
          <img
            src="/Images/school-lab.jpg" // Replace with your right image URL
            alt="Right Image"
            className="w-full h-auto max-w-[816px] max-h-[1005px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      {/* Additional Image and Chairman's Note */}
      <div className="flex flex-col md:flex-row justify-center mb-16 gap-8 max-w-6xl mx-auto px-6">
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <img
            src="your-left-image-url.jpg" // Replace with your left image URL
            alt="Left Image"
            className="w-full h-auto max-w-[816px] max-h-[1005px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1 p-4 md:w-2/3 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Message from the Chairman
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
            Our school is committed to providing a holistic educational experience that nurtures each student’s unique talents and abilities. We believe in fostering a supportive environment where students can grow, learn, and thrive. With a focus on academic excellence and character development, we prepare our students for the challenges and opportunities of the future.
          </p>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="max-w-6xl mx-auto p-6 mb-16">
        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
          "Education is the key to unlocking your potential. It empowers you to think critically, explore new ideas, and challenge the status quo. Remember, every setback is an opportunity for growth. Embrace your journey with curiosity and resilience. Surround yourself with those who inspire you and push you to be your best. Each day is a chance to learn something new, to take a step closer to your dreams. Believe in yourself and your abilities. The future is shaped by your actions today. Go forth with confidence, knowing that you have the power to make a difference in the world."
          <cite className="block mt-4 text-right text-blue-500 font-semibold">
            — Nelson Mandela
          </cite>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;