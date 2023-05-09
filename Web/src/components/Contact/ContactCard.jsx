import React, { useState } from 'react';
import './ContactCard.css';
import { BsPerson } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { TfiCommentAlt } from 'react-icons/tfi'
import axios from 'axios';
import { toast } from "react-hot-toast";

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1.2rem",
        background: "#333",
        color: "#fff",
    },
};


function ContactCard() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if the phone number is valid
        const phoneRegex = /^[0-9]{10}$/; // Regular expression to match a 10-digit phone number
        if (!phoneRegex.test(phone)) {
            toast.error("Please enter a valid phone number", toastProps);
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address", toastProps);
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
            if(response.status===200){
                toast.success("Appointment Created Succesfully",toastProps);
                setName('');
                setPhone('');
                setEmail('');
                setComment('');
                return response;
            }
        } catch (error) {
            toast.error(error, toastProps);
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-card">
            <div className="contact-heading">
                <h2>GET IN TOUCH</h2>
            </div>
            <div className='first-row'>
                <div className="half input-row">
                    <BsPerson className="icon" />
                    <input type="text" value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} style={{ textTransform: 'none' }} />
                </div>
                <div className="half input-row">
                    <FiPhoneCall className="icon" />
                    <input type="text" value={phone} placeholder='Mobile Number' onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className="input-row">
                <MdOutlineEmail className="icon" />
                <input type="email" value={email} id="input-field" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} style={{ textTransform: 'none' }} />
            </div>
            <div className="input-row">
                <TfiCommentAlt className="icon" />
                <textarea value={comment} placeholder='Comment' onChange={(e) => setComment(e.target.value)} style={{ textTransform: 'none' }} />
            </div>
            <div className="input-row">
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default ContactCard;
