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
    const handleSubmit = async (e) => {{
  e.preventDefault(); // This is good, keep it to prevent a full page reload

  // Create a FormData object from the form element
  const formData = new FormData(e.target);

  try {
    // Send the formData object to the Astro action
    const result = await actions.send(formData);

    // Handle the result (e.g., show a success message)
    console.log('Action result:', result);
    alert('Form submitted successfully!');
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Submission failed:', error);
    alert('Submission failed. Please try again.');
  }
};
  };

  return (
   <div className="page-wrapper contact-us-page"
         style={{ backgroundImage: 'url(/images/Dilani-7.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content contact-us-page">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
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
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}