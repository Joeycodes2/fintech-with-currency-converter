import React from 'react';



const Security = () => {

  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            {/* Replace with your actual image */}
            <img 
              src="https://placehold.co/600x400/22c55e/ffffff?text=Secure+Banking" 
              alt="Secure Banking Illustration" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your security is our priority
            </h2>
            <p className="text-gray-600 mb-6">
              We use state-of-the-art security measures to protect your information and transactions, so you can bank with confidence.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-green-200 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span><strong>End-to-end Encryption:</strong> All your data is encrypted and securely stored.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span><strong>Fraud Protection:</strong> We monitor your account for suspicious activity 24/7.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span><strong>Regulatory Compliance:</strong> Fully licensed and regulated to ensure your funds are safe.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;