import React from 'react'
import { Footer, MainContact, Navbar } from '../../components/ComponentExport';
import "./ThankYou.css"


function ThankYou() {
    return (
        <>
            <div className="flex flex-col mt-[200px] md:mb-[250px] xxs:mb-[200px]">
                <Navbar />
                
                <div className="flex flex-col items-center justify-center">
                    <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    </div>
                    <h1 className="mb-4 text-6xl font-bold">Thank You!</h1>
                    <p className="mb-4 text-base leading-relaxed text-center md:text-lg lg:text-xl">Our customer care representative will get in touch with you shortly.</p>
                </div>
            </div>    

            <Footer/>
            <MainContact/>
        </>
        
    );
}

export default ThankYou;