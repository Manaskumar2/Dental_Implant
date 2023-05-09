import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { client } from "../../lib/client"
import { PortableText } from '@portabletext/react';
import { Footer, MainContact, Navbar } from '../../components/ComponentExport';

function ServicesPost() {
    const [cardDetails, setCardDetails] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(`
      *[slug.current == "${slug}"] {
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
        "name":author -> name, 
      } 
    `).then((data) => {
            setCardDetails(data[0])
        })
            .catch(console.error);
    }, [slug])

    useEffect(() => {
        document.title = `Reading | ${cardDetails.title}`
    }, [cardDetails.title])


    return (
        <>
            <Navbar />

            {cardDetails && <section className='py-20 px-5 max-w-3xl mx-auto'>

                {cardDetails.mainImage && <img src={cardDetails.mainImage.asset.url} alt={cardDetails.mainImage.alt} className="h-2/3 w-full object-cover rounded-2xl shadow" />
                }
                <h1 className='text-4xl  xl:text-6xl my-8 mb-4'>{cardDetails.title}</h1>

                <div>
                    <PortableText value={cardDetails.body} />
                </div>

                <div className='max-w-7xl mx-auto px-5  mt-10 flex items-end justify-end'>
                    <Link
                        to="/services"
                        className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                    >
                        View all Services

                    </Link>
                </div>

            </section>}
            <MainContact />
            <Footer />

            
        </>

    )
}

export default ServicesPost