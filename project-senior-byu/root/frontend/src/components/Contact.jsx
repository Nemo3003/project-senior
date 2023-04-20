import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'



export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ooi6ilp', 'template_21wrskj', form.current, 'KtqminZO7K5bCpIz3')
      .then((result) => {
          e.target.reset();
          Swal.fire(
            'Good news!',
            'Message succesfully sent!',
            'success'
          )
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  };

  return (
    <div className='flex justify-center'>
    <form ref={form} onSubmit={sendEmail} className="lx:max-w-lg w-1/2 ">
      <div className="mb-4">
        <label  className="block font-medium text-gray-700 mb-2">Name</label>
        <input type="text" name="from_name" id="name" className="border border-gray-300 p-2 w-full rounded-md" />
      </div>
      <div className="mb-4">
        <label  className="block font-medium text-gray-700 mb-2">Email</label>
        <input type="email" name="user_email" id="email" className="border border-gray-300 p-2 w-full rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">Message</label>
        <textarea name="message" id="message" rows="5" className="border border-gray-300 p-2 w-full rounded-md"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
    </form>
    </div>
  );
};
