import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Terms and Conditions</h1>

      <h2 className="text-2xl font-semibold mt-4" id="introduction">1. Introduction</h2>
      <p className="text-gray-700 leading-relaxed">
        Welcome to Shri Ram Vishal Singh Shrimati RamDhani Devi Inter College. By enrolling or participating in any of our services, activities, or using our facilities, you agree to the following terms and conditions. These terms outline the rules and regulations governing the use of our services, and your acceptance means you are bound by these rules.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="code-of-conduct">2. Code of Conduct</h2>
      <p className="text-gray-700 leading-relaxed">
        All students, staff, and visitors are expected to behave responsibly, ethically, and with respect for others. Disrespectful or harmful behavior, including bullying, harassment, or discrimination, will not be tolerated and may result in disciplinary action or suspension from the school.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="use-of-facilities">3. Use of School Facilities</h2>
      <p className="text-gray-700 leading-relaxed">
        Students are responsible for taking care of school property, including classrooms, labs, equipment, and common areas. Any damage caused intentionally or through negligence may lead to penalties, including covering the costs of repair or replacement.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="attendance">4. Attendance and Punctuality</h2>
      <p className="text-gray-700 leading-relaxed">
        Students must attend all scheduled classes and activities punctually. Absenteeism and tardiness without valid reasons may affect student performance and could result in disciplinary measures.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="academic-integrity">5. Academic Integrity</h2>
      <p className="text-gray-700 leading-relaxed">
        Academic honesty is vital to maintaining a fair and equitable learning environment. Cheating, plagiarism, or any form of academic dishonesty is prohibited. Violating this policy may result in suspension, failure of the subject, or expulsion from the school.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="internet-use">6. Internet and Technology Use</h2>
      <p className="text-gray-700 leading-relaxed">
        The use of the school's internet and technology resources is intended for educational purposes only. The following actions are prohibited:
      </p>
      <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
        <li>Accessing inappropriate websites.</li>
        <li>Downloading or distributing illegal or unauthorized materials.</li>
        <li>Cyberbullying or sharing harmful content.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        Violating these rules can lead to restricted access to school technology or other penalties.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="privacy-policy">7. Privacy Policy</h2>
      <p className="text-gray-700 leading-relaxed">
        The school values your privacy. We collect and store your personal information for educational purposes, including communication and academic records. We will not share your information without your consent, except as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="changes-to-terms">8. Changes to Terms</h2>
      <p className="text-gray-700 leading-relaxed">
        The school reserves the right to modify these terms at any time. Any changes will be communicated to students and staff. Continued use of school services after changes constitutes acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-4" id="contact-information">9. Contact Information</h2>
      <p className="text-gray-700 leading-relaxed">
        If you have any questions or concerns regarding these terms, please contact the school administration at [admin email or phone number].
      </p>
    </div>
  );
};

export default TermsAndConditions;