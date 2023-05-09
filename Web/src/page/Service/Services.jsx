import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/client"
import { Footer, MainContact, Navbar } from '../../components/ComponentExport';




function Services() {
  const [ServiceCard, setServiceCard] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type== "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
      }
    `).then((data) => {
      setServiceCard(data)
    })
      .catch(console.error);
  }, [])
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl px-5 mx-auto mb-10 mt-10 bg-[#fff]">
        <h1 className="text-4xl lg:text-6xl mb-6 capitalize">All Services</h1>
      </div>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ServiceCard.map((ServicesCard) => (
            <article key={ServicesCard.slug.current} className='shadow-md rounded-md '>
              <img src={ServicesCard.mainImage.asset.url} alt={ServicesCard.mainImage.alt} className="h-64 w-[100%] rounded" />
              <div className = "p-[1rem] rounded bg-[#f2ffff]">
                <h4 className="text-xl mt-2 capitalize">{ServicesCard.title}</h4>
                <p className=" text-[1rem] mt-2 leading-relaxed">
                  {`${ServicesCard.body[0].children[0].text.substring(0, 140)}...`}
                </p>
                <button className="mt-6 mb-5">
                  <Link
                    to={`/services/${ServicesCard.slug.current}`}
                    className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  >
                    Read More
                  </Link>
                </button>
              </div>
              
            </article>
          ))}
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-5 mb-5 py-8 flex items-end rounded justify-end">
        <Link to="/" className="bg-black py-2 px-8  rounded text-white tracking-wide hover:opacity-75 tranistion-all duration-200">
              Back to Homepage
            </Link>
      </div>
      <MainContact />
      <Footer />
    </>
  )
}

export default Services