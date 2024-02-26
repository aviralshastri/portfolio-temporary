import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import Page from '@/components/page';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    description: '',
  });

  const [submissionCount, setSubmissionCount] = useState(0);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    const storedSubmissionCount = cookie.get('submissionCount');
    if (storedSubmissionCount) {
      setSubmissionCount(parseInt(storedSubmissionCount, 10));
    }
  }, []);

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

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!name || /\d/.test(name)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!mobile || /[a-zA-Z]/.test(mobile)) {
      alert('Please enter a valid mobile number.');
      return;
    }
    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    if (submissionCount < 3) {
      setButtonDisabled(true);

      try {
        const emailText = `Name: ${name}, Mobile: ${mobile}, Email: ${email}, Description: ${description}`;

        await fetch('/api/sendData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: emailText,
          }),
        });

        alert('Data sent successfully!');
      } catch (error) {
        console.error('Error sending email: ', error);
        alert('Error sending email. Please try again later.');
      }
      setSubmissionCount(submissionCount + 1);
      setButtonDisabled(false);
      cookie.set('submissionCount', submissionCount + 1, { expires: 1 });
    } else {
      alert('Sorry, you have exceeded the submission limit for today. Please try again tomorrow.');
    }
  };



  return (
    <Page>
      <div id="contact" className='bg-black pt-24 pb-20'>

      <div className="max-w-md mx-auto  p-6 mt-8 bg-black rounded-md mb-8 shadow-2xl">
      <h1 className="text-4xl font-bold mb-12 text-white justify-centeritems-center text-center">Contact</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
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
            <label htmlFor="mobile" className="block text-white text-sm font-bold mb-2">
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
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
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
            <label htmlFor="description" className="block text-white text-sm font-bold mb-2">
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
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </Page>
  );
};

export default Contact;
