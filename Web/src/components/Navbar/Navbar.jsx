import React from 'react';
import './Navbar.css';
import {useNavigate } from "react-router";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { toast } from "react-hot-toast";
import axios from 'axios';



export const toastProps = {
  position: "top-center",
  duration: 2000,
  style: {
    fontSize: "1.2rem",
    background: "#333",
    color: "#fff",
  },
};


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const navigateToThankYou = () => {
    navigate("/thankyou");
  }

  
  const navigateToHome = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
      
    } else {
      navigate('/');
    }
  };

  const navigateToServices = () => {
    navigate("/services");
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);


    // Check if all fields are filled
    if (!name || !phone || !email || !comment) {
      toast.error("Please fill in all fields", { ...toastProps });
      setLoading(false); // Set loading state back to false
      return;
    }
    // Check if the phone number is valid
    const phoneRegex = /^[0-9]{10}$/; // Regular expression to match a 10-digit phone number
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number", { ...toastProps });
      setLoading(false); // Set loading state back to false
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address", { ...toastProps });
      setLoading(false); // Set loading state back to false
      return;
    }


    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/createAppontments`, {
        name,
        phone,
        email,
        comment,
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Appointment Created Succesfully", { ...toastProps });
        setName('');
        setPhone('');
        setEmail('');
        setComment('');
        setLoading(false); // Set loading state back to false
        closeModal();
        navigateToThankYou();
        console.log(response)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || "Something went wrong", { ...toastProps });
      setLoading(false); // Set loading state back to false
      return;
    }
  };

  
  return (
    <>
    <nav className='navbar'>
      <ul className='navbar-nav'>
          <li className='nav-item' >
          <div className='nav-link' onClick={navigateToHome}>
              Home
            </div>
          </li>
          <li className='nav-item'>
          <div className='nav-link' onClick={navigateToServices}>
              Services
            </div>
          </li>
        <li className='nav-item'>
          <div className='nav-link' onClick={scrollToBottom}>
            Contact
          </div>
        </li>
        
        <li className='nav-item book'>
          <button className='nav-link' onClick={openModal}>
            Book an Appointment
          </button>
        </li>
      </ul>
    </nav>

    
     <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl md:max-w-xl lg:max-w-2xl rounded-2xl">
                  <Dialog.Title as="h3" className="mb-6 text-3xl font-bold xxs:text-2xl">
                    Book An Appointment
                  </Dialog.Title>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                      <div className="mb-4">
                        <input
                          type="text"
                          value={name}
                          placeholder="Your Name*"
                          onChange={(e) => setName(e.target.value)}
                          className="px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          style={{ textTransform: 'none' }}
                          name='name'
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          value={phone}
                          placeholder="Mobile Number*"
                          onChange={(e) => setPhone(e.target.value)}
                          className="px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          style={{ textTransform: 'none' }}
                          name='phone'
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          value={email}
                          placeholder="Email*"
                          onChange={(e) => setEmail(e.target.value)}
                          className="px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          style={{ textTransform: 'none' }}
                          name='email'
                        />
                      </div>
                      <div className="mb-4">
                        <textarea
                          value={comment}
                          placeholder="Comment*"
                          onChange={(e) => setComment(e.target.value)}
                          className="px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          style={{ textTransform: 'none' }}
                          name='comment'
                        ></textarea>
                      </div>
                      <div className="input-row">
                        <button
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? <div className="loader"></div> : "SUBMIT"}
                        </button> 
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </>
  );
}

export default Navbar;
