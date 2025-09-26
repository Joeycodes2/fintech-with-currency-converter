import React from 'react';
import { Link } from 'react-router-dom';


// CALL TO ACTION
const CTA = () => {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-green-100">
          Join thousands of Africans who are already enjoying a better banking experience. 
          Open an account in minutes.
        </p>
        <Link to="/get-started" className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-300 shadow-lg">
          Create a free account
        </Link>
      </div>
    </section>
  );
};

export default CTA;