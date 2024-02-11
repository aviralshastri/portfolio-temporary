import React, { useState } from 'react';
import Page from '@/components/page';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    description: '',
  });
  const [OTP, setOTP]=useState('000000')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, mobile, email, description } = formData;
  // Validate that the email is not empty and follows a basic format
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  try {
    const response = await fetch('/api/sendOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      alert('OTP sent successfully!');
      while (true){
        const inputOTP = window.prompt("Enter OTP:", "");
        if (inputOTP===responseData.otp){
          MailSender(name,mobile,description,email);
          break;
        }
        else{
          const retry=window.confirm("Do you want to re-try entering OTP ?");
          if (retry){
            continue;
          }
          else{
            alert("E-Mail was not sent.")
            break;
          }
        }
      }
      
    } else {
      alert('Error sending OTP. Please try again later.');
    }
  } catch (error) {
    console.error('Error sending OTP: ', error);
    alert('Error sending OTP. Please try again later.');
  }
};
  const MailSender = async (name,mobile,description,email) => {  
    try {
      const emailText = `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nDescription: ${description}`;
  
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Enquiry from portfolio',
          text: emailText,
        }),
      });
  
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email: ', error);
      alert('Error sending email. Please try again later.');
    }
  };
  
  

  return (
    <Page>
      <div className="max-w-md mx-auto bg-white p-6 mt-8 rounded-md mb-8 shadow-2xl">
        <h1 className="text-4xl font-bold mb-4 justify-center items-center text-center">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
              placeholder="Your Mobile Number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your description"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </Page>
  );
};

export default Contact;