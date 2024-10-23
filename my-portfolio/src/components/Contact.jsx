import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  // Create refs for the input fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  
  // State to manage error messages
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    // Get values from refs
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if(name === ""){
      setError('Please fill in name field.');
      return;
    } else if(email === ""){
      setError('Please fill in email field.');
      return;
    } else if(message === ""){
      setError('Please fill in message field.');
      return;
    } else {
      // All fields are filled correctly, proceed with further logic
      setError(''); // Clear any previous errors
      // Add your form submission logic here
    }
    

    const formData = new FormData(event.target);
    formData.append("access_key", "782a4aab-94ed-4dc5-b571-615219bf80a4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Success", res);
      // Clear input fields after successful submission
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
    } else {
      alert("Try Again", res);
    }
  };

  return (
    <div className="flex justify-between items-center p-10">
      <div className="w-1/2 space-y-4">
        <h2 className="pb-10 font-semibold text-6xl ">
          Let's talk
        </h2>
        <p className="text-lg text-stone-400 pb-10">
          I'm currently available to take on new projects, so feel free to send me a message
          about anything that you want me to work on. You can contact anytime.
        </p>
        <div className="space-y-2 text-stone-400">
          {/* Email */}
          <div className="flex items-center space-x-3 ">
            <FaEnvelope className="text-2xl" />
            <p>geesaradesilva92@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-2xl" />
            <p>+94-76 852 7720</p>
          </div>
          {/* Location */}
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-2xl" />
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <form onSubmit={onSubmit} className="w-1/2 space-y-4">
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        <input
          type="text"
          name='name'
          placeholder="Enter your name"
          ref={nameRef}  // Attach ref here
          className="w-full p-4 text-lg bg-stone-50 text-black rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        />
        <input
          type="email"
          name='email'
          placeholder="Enter your email"
          ref={emailRef}  // Attach ref here
          className="w-full p-4 text-lg bg-stone-50 text-black rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        />
        <textarea
          placeholder="Enter your message"
          rows="4"
          name='message'
          ref={messageRef}  // Attach ref here
          className="w-full p-4 text-lg bg-stone-50 text-black rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        ></textarea>
        <button
          type='submit'
          className="bg-gradient-to-r bg-gray-900 text-white py-3 px-6 rounded-md text-lg font-semibold hover:opacity-80"
        >
          Submit now
        </button>
      </form>
    </div>
  );
}

export default Contact;
