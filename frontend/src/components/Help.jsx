import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Reusable Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="text-green-400 transform transition-transform duration-300">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="p-6 pt-0 text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  );
};


const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: 'How do I open an account?', answer: 'You can open an account by clicking the "Get Started" button on our homepage and filling out the registration form. The process takes less than 5 minutes.' },
    { question: 'Are there any hidden fees?', answer: 'No, JodaemFinancial believes in transparent banking. We do not have monthly maintenance fees or any hidden charges. All potential costs are clearly outlined in our terms of service.' },
    { question: 'Is my money secure?', answer: 'Absolutely. We use bank-grade encryption and multi-factor authentication to protect your account. Your funds are also insured up to the standard limit.' },
    { question: 'How do I contact customer support?', answer: 'You can contact us via the contact form on this page, email us at support@JodaemFinancial.com, or call our toll-free number during business hours.' },
  ];
  
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Simple Header for the Help Page */}
      <header className="bg-black/20 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Help Center</h1>
            <Link to="/" className="text-green-400 hover:text-green-300">&larr; Back to Home</Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* FAQ Section */}
        <section id="faq" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
          <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10">Support Topics</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Support Card 1 */}
                <div className="bg-gray-800/50 p-8 rounded-lg text-center">
                    <svg className="w-12 h-12 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <h3 className="text-xl font-bold mb-2">My Account</h3>
                    <p className="text-gray-400">Manage your profile, settings, and security preferences.</p>
                </div>
                {/* Support Card 2 */}
                <div className="bg-gray-800/50 p-8 rounded-lg text-center">
                    <svg className="w-12 h-12 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                    <h3 className="text-xl font-bold mb-2">Payments & Transfers</h3>
                    <p className="text-gray-400">Get help with sending, receiving, and managing payments.</p>
                </div>
                {/* Support Card 3 */}
                <div className="bg-gray-800/50 p-8 rounded-lg text-center">
                    <svg className="w-12 h-12 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    <h3 className="text-xl font-bold mb-2">Security & Fraud</h3>
                    <p className="text-gray-400">Learn how to protect your account and report suspicious activity.</p>
                </div>
            </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact">
            <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-800/50 p-8 rounded-lg">
                {/* Contact Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-gray-400 mb-6">Our support team is available 24/7 to assist you. Fill out the form or use the contact details below.</p>
                    <div className="space-y-4">
                        <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> support@JodaemFinancial.com</p>
                        <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +1 (555) 123-456(0)</p>
                    </div>
                </div>
                {/* Contact Form */}
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none" />
                    <input type="email" placeholder="Your Email" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none" />
                    <textarea placeholder="Your Message" required rows="4" className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none"></textarea>
                    <button type="submit" className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-300">Send Message</button>
                </form>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Help;