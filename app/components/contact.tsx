"use client";
import React, {useState} from "react";
import "../componentcss/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add the logic to send the form data to the server and handle the email sending process.
    // You can use libraries like 'axios' or 'fetch' to make API requests to a backend service that handles the email sending.
    console.log("Form data:", formData);
  };

  return (
    <div className='contact-container'>
      <h2 className='heading'>Contact Me</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
        <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
        <textarea name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} required />
        <button type='submit' className='submit-button'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
