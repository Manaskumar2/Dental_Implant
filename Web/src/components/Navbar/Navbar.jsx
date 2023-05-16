import React, { useEffect } from 'react';
import './Navbar.css';
import {useNavigate } from "react-router";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { TfiCommentAlt } from 'react-icons/tfi'
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
  // const primaryNav = document.querySelector('.navbar-nav');
  // const navToggle = document.querySelector('.mobile-nav-toggle');

  // navToggle.addEventListener('click', () => {
  //   const visibility = primaryNav.getAttribute('data-visible');
  //   console.log(visibility)
  // })
  
  useEffect(() => {
    const navToggle = document.querySelector('.mobile-nav-toggle');

    const handleClick = () => {
      const primaryNav = document.querySelector('.navbar-nav');
      const visibility = primaryNav.getAttribute('data-visible');
      console.log(visibility);
      if(visibility === 'false'){
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
      } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

      }
    };

    if (navToggle) {
      navToggle.addEventListener('click', handleClick);
    }

    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', handleClick);
      }
    };
  }, []);
  

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
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.navbar-nav');
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
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
    <button className='mobile-nav-toggle' aria-controls="primary-navigation" aria-expanded="false"><span class="sr-only">Menu</span></button>
    
    <nav className='navbar'>
      <ul id="primary-navigation" data-visible="false" className='navbar-nav'>
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
                      <div className="mb-4 input-row">
                        <BsPerson className="icon" />
                        <input
                          type="text"
                          value={name}
                          placeholder="Your Name*"
                          onChange={(e) => setName(e.target.value)}
                          style={{ textTransform: 'none' }}
                          name='name'
                        />
                      </div>
                      <div className="mb-4 input-row">
                        <FiPhoneCall className="icon" />
                        <input
                          type="text"
                          value={phone}
                          placeholder="Mobile Number*"
                          onChange={(e) => setPhone(e.target.value)}
                          style={{ textTransform: 'none' }}
                          name='phone'
                        />
                      </div>
                      <div className="mb-4 input-row">
                        <MdOutlineEmail className="icon" />
                        <input
                          type="email"
                          value={email}
                          placeholder="Email*"
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ textTransform: 'none' }}
                          name='email'
                        />
                      </div>
                      <div className="mb-4 input-row">
                        <TfiCommentAlt className="icon" />
                        <textarea
                          value={comment}
                          placeholder="Comment*"
                          onChange={(e) => setComment(e.target.value)}
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
