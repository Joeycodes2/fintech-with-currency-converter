import React from 'react';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';



// You can create a features array like this
const featuresData = [
{ title: 'Instant Transfers', description: 'Send and receive money in a flash.', 
icon: <Icon icon="streamline-kameleon-color:conversion" width="48" height="48" />},
    { title: 'Automated Savings', description: 'Reach your financial goals faster.',  
     icon: <Icon icon="noto-v1:dollar-banknote" width="128" height="128" />},
    { title: 'Bill Payments', description: 'Pay all your bills in one place.',
         icon: <Icon icon="streamline-kameleon-color:money-letter" width="48" height="48" /> },
    { title: 'Virtual Cards', description: 'Shop securely online with virtual cards.',
        icon: <Icon icon="streamline-kameleon-color:credit-card-3" width="48" height="48" />
     },
];

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">More Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">We are committed to providing you with a banking experience that is simple, secure, and rewarding
                    <span><Link to="/" className='underline text-green-600 hover:text-green-900 font-semibold'>&larr; back to top</Link></span></p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-lg">
                            {/* Placeholder for Icon */}
                            <div className="bg-green-200 text-green-700 w-12 h-12 rounded-full inline-flex items-center justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
