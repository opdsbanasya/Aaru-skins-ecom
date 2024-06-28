import React, { useState } from "react";

const Contact = () => {
  // Input state to manage form data
  const [contactFormData, setContactFormData] = useState({ name: "", email: "" });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({ name: "", email: "" });

  // Validate input fields
  const validateInput = (name, value) => {
    const errors = { ...formErrors };
    if (name === "name") {
      if (!value || value.length > 25) {
        errors.name = "Name must be less than 25 characters";
      } else {
        errors.name = "";
      }
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value)) {
        errors.email = "Please enter a valid email";
      } else {
        errors.email = "";
      }
    }
    setFormErrors(errors);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
    validateInput(name, value);
  };

  // Validate entire form before submission
  const validateForm = () => {
    const errors = {};
    if (!contactFormData.name || contactFormData.name.length > 25) {
      errors.name = "Name must be less than 25 characters";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactFormData.email || !emailRegex.test(contactFormData.email)) {
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission logic (e.g., send data to server)
      console.log("Form submitted:", contactFormData);
    } else {
      // Set errors to state to display them
      setFormErrors(errors);
    }
  };

  return (
    <div className="h-screen w-full flex justify-between bg-zinc-100">
      <section className="w-1/2 h-full flex flex-col items-center gap-5 pt-10">
        <h2 className="text-3xl font-semibold mt-5">Contact us</h2>
        <section className="space-y-2 px-16 py-10 rounded-md border-2 bg-zinc-300 border-black shadow-upper-shadow">
          <h4 className="text-md font-semibold">
            45, Manu Tower, Malviya Nagar <br /> Jaipur, Rajasthan <br /> 302017.
          </h4>
          <h4 className="text-md font-semibold"> Call us : +91 987*****10</h4>
          <h4 className="text-md font-semibold"> Mail us : help@aaru.skins</h4>
          <section className="">
            <h4 className="text-xl font-semibold mt-10">Follow us on Social Media</h4>
            <a className="space-x-3 " href="#">
              <i className="ri-instagram-fill"></i>
              <i className="ri-facebook-fill"></i>
              <i className="ri-youtube-fill"></i>
              <i className="ri-twitter-x-fill"></i>
            </a>
          </section>
        </section>
      </section>
      <section className="w-1/2 h-full">
        <form
          action="#"
          onSubmit={handleSubmit}
          className="w-[60%] h-[70vh] bg-zinc-300 mx-auto mt-20 flex flex-col items-center justify-center gap-5 rounded-md border-2 border-black shadow-upper-shadow"
        >
          <input
            className="w-[80%] h-12 outline-none p-2 text-lg rounded-md shadow-br border-2 border-black"
            type="text"
            name="name"
            value={contactFormData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
          <input
            className="w-[80%] h-12 outline-none p-2 text-lg rounded-md shadow-br border-2 border-black"
            type="email"
            name="email"
            value={contactFormData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
          <textarea
            className="w-[80%] h-24 outline-none p-2 text-lg resize-none rounded-md shadow-br border-2 border-black"
            name="message"
            id=""
            placeholder="Enter Your Message"
          />
          <input
            className="bg-lime-50 px-4 py-2 text-lg rounded-md self-center shadow-br border-2 font-semibold border-black active:shadow-none"
            type="submit"
            value="Submit"
          />
        </form>
      </section>
    </div>
  );
};

export default Contact;
