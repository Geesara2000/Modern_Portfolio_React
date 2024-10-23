import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
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
    }else{
      alert("Try Again", res);
    }
  };

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
        
        <input
          type="text"
          name='name'
          placeholder="Enter your name"
          className="w-full p-4 text-lg bg-black text-white rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        />
        <input
          type="email"
          name='email'
          placeholder="Enter your email"
          className="w-full p-4 text-lg bg-black text-white rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        />
        <textarea
          placeholder="Enter your message"
          rows="4"
          name='message'
          className="w-full p-4 text-lg bg-black text-white rounded-md outline-none focus:ring-2 focus:ring-stone-400"
        ></textarea>
        <button
          type='submit'
          className="bg-gradient-to-r bg-stone-200 text-black py-3 px-6 rounded-md text-lg font-semibold hover:opacity-90"
        >
          Submit now
        </button>
      </form>
    </div>
  );
}



export default Contact;
