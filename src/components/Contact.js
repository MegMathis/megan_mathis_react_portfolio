import React, { useState } from "react";

const Contact = () => {
  const [error, setError] = useState(false);

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setError(true);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-900 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/cc670db9-52f4-4efe-a6e3-588a7eb01955"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-300 py-4">
            If you would like to contact me, please submit the form below or
            email me at mcdonough.megan25@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          onBlur={handleBlur}
        />
        {error && <p className="text-red-500">This field is required</p>}
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
          onBlur={handleBlur}
        />
        {error && <p className="text-red-500">This field is required</p>}
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          onBlur={handleBlur}
        ></textarea>
        {error && <p className="text-red-500">This field is required</p>}

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
