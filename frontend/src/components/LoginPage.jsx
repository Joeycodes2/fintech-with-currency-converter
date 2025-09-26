import React, { useState } from 'react';
import { Link } from 'react-router-dom';




// A simple SVG icon component for inputs
const InputIcon = ({ children }) => (
  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
    {children}
  </div>
);

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log('Account creation data:', formData);
    // You could add navigation to a dashboard here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Side: The Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <Link to="/" className="text-green-300 hover:text-white mb-8">&larr; Back to Home</Link>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Login To Your Account</h2>
          <p className="text-gray-400 mb-8">Join Jodaem Financial by creating a Personal or Business account for free and unlock a new world of banking.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="relative">
              <InputIcon>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </InputIcon>
              <input type="text" name="name" placeholder="Username" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 pl-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" onChange={handleChange} />
            </div>

            {/* Password Input */}
            <div className="relative">
               <InputIcon>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </InputIcon>
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 pl-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" onChange={handleChange} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-white">
                {showPassword ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.865 0 3.626.588 5.097 1.584l-1.42 1.42A6.983 6.983 0 0012 7c-3.31 0-6.132 2.13-7.258 5C5.868 14.87 8.69 17 12 17c.594 0 1.174-.083 1.72-.236l-1.42-1.42zM19.937 19.937l-1.414-1.414A10.038 10.038 0 0112 21c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.218 0 2.38.27 3.447.76l-1.414-1.414L19.937 2.063l1.414 1.414L3.475 22.35l-1.414-1.414L19.937 19.937z" /></svg>}
              </button>
            </div>

            <button type="submit" className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-300 mt-4 text-lg">
              Login Account
            </button>
            <p className="text-center text-gray-400 text-sm">By creating an account, you agree to our <a href="#" className="text-green-400 hover:underline">Terms of Service</a>.</p>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-400">Don't have an account? <Link to="/get-started" className="text-green-400 font-semibold hover:underline">Create Account</Link></p>
          </div>
        </div>

        {/* Right Side: Branding/Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-12 bg-gray-900/50">
           <div className="text-center">
            <svg className="w-32 h-32 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
             <h3 className="text-3xl font-bold mt-6">Secure. Simple. Reliable.</h3>
             <p className="text-gray-300 mt-4 max-w-sm mx-auto">
               Join thousands of users who trust Jodaem Financial for their daily financial needs. Fast, secure, and built for you.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;