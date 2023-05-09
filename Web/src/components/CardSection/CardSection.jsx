
import './CardSection.css';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const CardSection = () => {
  const [isModal, setIsOpenModal] = useState(false);

  function handleReadMore() {
    setIsOpenModal(true);
  }
  function closeModal() {
    if (isModal) {
      setIsOpenModal(false);
    }
    
  }

  return (

    <>
      <section className='card-section'>
        <div className='card-content'>
          <h2 className='card-header'>Globedent Dental Spa</h2>
          <div className='card-hr'></div>
          <p className='card-text'>
            Globodent Dental Spa is owned and run by <span className="font-bold">Dr. Aanchal Bansal</span> and <span className="font-bold">Dr. Rohit Bansal</span>. It is one of the fastest<br />growing and most reliable dental facilities based out of South Delhi.
          </p>
          {/* <div className='more-text'>
            <p>
              We offer a wide range of dental services, including general dentistry, cosmetic dentistry, orthodontics, and more. Our team of experienced dentists and staff are dedicated to providing high-quality care in a comfortable and friendly environment.
            </p>
          </div> */}
          <button className='card-read-me-button' onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </section>
      <Transition appear show={isModal} as={Fragment}>
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
                    className="text-lg font-medium leading-6 text-black"
                  >
                    Globedent Dental Spa
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm">
                      Globodent Dental Spa is owned and run by <span className="font-bold">Dr. Aanchal Bansal</span> and <span className="font-bold">Dr. Rohit Bansal</span>. It is one of the fastest growing and most reliable dental facilities based out of South Delhi. We offer a wide range of dental services, including general dentistry, cosmetic dentistry, orthodontics, and more. Our team of experienced dentists and staff are dedicated to providing high-quality care in a comfortable and friendly environment.
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

export default CardSection;

