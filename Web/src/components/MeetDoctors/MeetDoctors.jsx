import "./MeetDoctors.css";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const MeetDoctors = () => {

    const [isOpenRohit, setIsOpenRohit] = useState(false);
    const [isOpenAanchal, setIsOpenAanchal] = useState(false);

    function closeModal() {
        if (isOpenRohit) {
            setIsOpenRohit(false);
        }
        if (isOpenAanchal) {
            setIsOpenAanchal(false);
        }
    }

    function openModalRohit() {
        setIsOpenRohit(true);
    }

    function openModalAanchal() {
        setIsOpenAanchal(true);
    }
    return (
        <>
            <div className='meet-doctors'>
                <h2>Meet Our Doctors</h2>
            </div>
            <p className='meet-doctors-subtitle'>we are the patients at Globodent Dental Spa in safe hands?</p>
            <div className='doctor-card-container'>
                <div className='doctorCard'>
                    <div className='doctorImage'>
                        <img src="https://boost-content-cdn.s3.ap-south-1.amazonaws.com/CustomPages/Images/537ea6a6.jpg" alt="" />
                    </div>
                    <div className='doctorContent'>
                        <h2 className="doctor-card-title" >Dr. Rohit Bansal</h2>
                        <p className="doctor-card-description">Dr. Rohit Bansal is an endodontist who specialises in root
                            canal treatments. He deals with the diagnosis of complex
                            causes which lead to tooth pain and provides relief to his
                            patients through root canal treatments and other
                            procedures. He harbours a keen interest in the fields of
                            endontics, cosmetic dentistry and restorative dentistry.
                        </p>
                        <button className="doctor-card-button" onClick={openModalRohit}>READ MORE &rarr;</button>
                    </div>
                </div>

                <div className='doctorCard'>
                    <div className='doctorImage'>
                        <img src="https://boost-content-cdn.s3.ap-south-1.amazonaws.com/CustomPages/Images/537ea6a6.jpg" alt="" />
                    </div>
                    <div className='doctorContent'>
                        <h2 className="doctor-card-title" >Dr. Aanchal Bansal</h2>
                        <p className="doctor-card-description">Dr. Aanchal Bansal is a very efficient prosthodonist and 
                            implantologist. She specialises in giving a fresh form and function to the new teeth which replaces 
                            the old ones which get lost due to various dental problems. This is called the rehabilitation of teeth.
                        </p>
                        <button className="doctor-card-button" onClick={openModalAanchal}>READ MORE &rarr;</button>
                    </div>
                </div>
            </div>  

            <Transition appear show={isOpenRohit} as={Fragment}>
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Dr. Rohit Bansal
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Dr. Rohit Bansal is an endodontist who specialises in root canal treatments. He deals with the diagnosis of complex causes which lead to tooth pain and provides relief to his patients through root canal treatments and other procedures. He harbours a keen interest in the fields of endontics, cosmetic dentistry and restorative dentistry.
                                        </p>
                                    </div>
                                    {/* <div className="flex items-center justify-center mt-[20px]">
                                        <img src="https://boost-content-cdn.s3.ap-south-1.amazonaws.com/CustomPages/Images/537ea6a6.jpg" alt="" className="w-[300px] h-[450px]" />
                                    </div> */}


                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            
            <Transition appear show={isOpenAanchal} as={Fragment}>
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Dr. Aanchal Bansal
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Dr. Aanchal Bansal is a very efficient prosthodonist and implantologist. She specialises in giving a fresh form and function to the new teeth which replaces the old ones which get lost due to various dental problems. This is called the rehabilitation of teeth.
                                        </p>
                                    </div>
                                    {/* <div className="flex items-center justify-center mt-[20px]">
                                        <img src="https://boost-content-cdn.s3.ap-south-1.amazonaws.com/CustomPages/Images/537ea6a6.jpg" alt="" className="w-[300px] h-[450px]" />
                                    </div> */}


                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default MeetDoctors;
