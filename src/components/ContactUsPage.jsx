// src/components/ContactUsPage.jsx
import React, {useState} from 'react';
import '../styles/pageStyles.css';
import { actions } from 'astro:actions';


export default function ContactUsPage() {
    const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subscribe: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
    const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const formData = new FormData(e.target);
    const result = await actions.send(formData);

    if (result.success) {
      alert('Message sent successfully!');
      // Reset form
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        subscribe: false,
      });
    } else {
      throw new Error(result.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert(error.message || 'Failed to send message. Please try again.');
  }
};

  return (
   <div className="page-wrapper contact-us-page"
         style={{ backgroundImage: 'url(/images/Dilani-7.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content contact-us-page px-4 md:px-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formState.subscribe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-800">Subscribe to our newsletter</label>
          </div>
          
          <button
            type="submit"
            className="w-full md:w-auto px-6 bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
