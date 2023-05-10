import React from 'react'
import { Footer, MainContact, Navbar } from '../../components/ComponentExport';


function ThankYou() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex flex-col items-center justify-center flex-grow bg-gray-100">
                <h1 className="mb-4 text-4xl font-bold">Thank You</h1>
                <p className="mb-4 text-base leading-relaxed text-center md:text-lg lg:text-xl">Our customer care representative will get in touch with you shortly.</p>
            </div>
            <MainContact />
            <Footer />
        </div>
    );
}

export default ThankYou;