import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_t0ayl9m";
    const templateId = "template_s0j9gnq"; 
    const publicKey = "r-6bRsMxIwrGsJJET";

    const templateParams = {  
      from_name: name,
      from_email: email,
      to_name: "Syed Haris Shah",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccessMessage("Your Message has been sent Sucessfully!"); // Show success message
      })
      .catch((error) => {
        console.error("Error Sending email", error);
        setSuccessMessage("Failed to send email. Please try again."); // Show error message
      });
  };

  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='mt-6 bg-[#161616] rounded-xl'>
        <div className='p-10'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
              <div>
                <div className='mt-2.5'>
                  <input
                    type="text"
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Your Name'
                    className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-gray-50'
                    required
                  />
                </div>
              </div>
              <div>
                <div className='mt-2.5'>
                  <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your email'
                    className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-gray-50'
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='mt-2.5'>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Your Message'
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-gray-50"
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>
                  Send
                </button>
              </div>
            </div>
          </form>

          {/* Conditional rendering of success or error message */}
          {successMessage && (
            <div className='mt-4 text-center text-white'>
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
