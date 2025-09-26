import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Hero = () => {
const [formData, setFormData] = useState({from: "", to: "", amount: ""});
  const [result, setResult] = useState(null);
  const [error, setError] = useState("")
  const currencyCodes = ["USD", "EUR", "GBP", "GHS", "NGN", "CAD", "JPY", "AUD", "CNY"];

  const handleChange = (e) => { 
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // http Request
    try {
      const response = await axios.post("http://localhost:5000/api/convert/", formData);

      setResult(response?.data);  
      setError("");
    } catch (error) {
      setError("Error", error?.response ? error?.response?.data : error?.message);
    }
  }

  return (
    <div className="relative bg-black opacity-95 text-white min-h-screen flex items-center">
      {/* <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        // Using a placeholder background that works well with text
        style={{ backgroundImage: "" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      </div> */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Two-column Flex Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Part 1: Text Content (Left Side) */}
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left md:pt-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Borderless Banking <br /> Reinvented.
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 text-gray-300"> 
              Receive payments from 180+ countries, Convert and Send in 58+ currencies, and Save by paying like a local to 22
              countries seamlessly.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to="/get-started" className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300">
                Get Started
              </Link>
              <Link to="/download-app" className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-600 transition duration-300">
                Download app
              </Link>
            </div>
          </div>

          {/* Part 2: currency converter ui */}
          <div className="md:w-1/2 lg:w-2/5 flex items-center justify-center w-full">
            <div className="w-full max-w-md bg-white/10 rounded-xl border border-white/20 backdrop-blur-lg p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-center mb-6">Global Currency Converter</h3>
          <section className="converter">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
             <select 
             name="from" 
             value={formData.from}
             onChange={handleChange}
             className={`w-full bg-transparent border border-gray-400 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 
                ${formData.from ? 'text-white' : 'text-gray-400'}`}
                >
              <option value="" className="text-gray-500">selects from currency</option>
              {currencyCodes.map((code) => (
                <option key={code} value={code} className="text-black bg-gray-400">
                  {code}
                </option>
              ))}
            </select>
            <select 
             name="to" 
             value={formData.to} 
             onChange={handleChange}
             className={`w-full bg-transparent border border-gray-400 rounded-lg p-3 focus:ring-green-500 
             focus:border-green-500 ${formData.from ? 'text-white' : 'text-gray-400'}`}
             >
              <option value="" className="text-black">Select to currency</option>
              {currencyCodes.map((code) => (
                <option key={code} value={code} className="text-black bg-gray-400">
                  {code} 
                </option>
              ))}
             </select>
             <input
             className="w-full bg-transparent border border-gray-400 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
             name="amount" 
             value={formData.amount} 
             onChange={handleChange} 
             placeholder="Amount" 
             type="number"
             />
             <button type="submit" className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg 
             hover:bg-green-600 transition duration-300 mt-2"> Convert </button>
          </form>
          {result && ( 
            <div className="mt-6 p-4 bg-black/30 rounded-lg text-center">
              <p className="text-lg">Converted Amount: <span className="font-bold">{result.convertedAmount} {result.target}</span></p>
              <p className="text-sm text-gray-300">Conversion Rate: {result.conversionRate}</p>
            </div>
          )}
          {error && <p className="text-red">Error: {error}</p>}
        </section>
          
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;