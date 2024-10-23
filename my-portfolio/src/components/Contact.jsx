import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="flex justify-between items-center p-10">
      
      <div className="w-1/2 space-y-4">
        <h2 className=" pb-10 font-semibold text-6xl ">
          Let's talk
        </h2>
        <p className="text-lg  text-stone-400 pb-10">
          I'm currently available to take on new projects, so feel free to send me a message
          about anything that you want me to work on. You can contact anytime.
        </p>
        <div className="space-y-2  text-stone-400">
          {/* Email */}
          <div className="flex items-center space-x-3 ">
            <FaEnvelope className="text-2xl" />
            <p>geesaraimal12@gmail.com</p>
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
      <div className="w-1/2 space-y-4">
        
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-4 text-lg bg-black text-white rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 text-lg bg-black text-white rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        />
        <textarea
          placeholder="Enter your message"
          rows="4"
          className="w-full p-4 text-lg bg-black text-white rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        ></textarea>
        <button
          className="bg-gradient-to-r bg-stone-200 text-black py-3 px-6 rounded-md text-lg font-semibold hover:opacity-90"
        >
          Submit now
        </button>
      </div>
    </div>
  );
}

export default Contact;
