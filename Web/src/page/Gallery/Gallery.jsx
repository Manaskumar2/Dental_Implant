import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/client"
import "./Gallery.css"
import { Footer, MainContact, Navbar } from '../../components/ComponentExport';
function Gallery() {

    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(null);

    const handleImageClick = (id) => {
        setActiveImage(id);
    };

    const handleOverlayClick = () => {
        setActiveImage(null);
    };

    useEffect(() => {
        client.fetch(`
    *[_type == "gallery"] {
      title,
      "imageUrl": image.asset->url
    }
  `).then((data) => {
            setImages(data);
        }).catch(console.error);
    }, []);




    return (
        <>
            <Navbar/>
            <div className="max-w-7xl px-5 mx-auto mb-10 mt-10">
                <h1 className="text-4xl lg:text-6xl mb-6 capitalize">All Photos</h1>
            </div>
            <div className="gallery">
                {images.map((image) => (
                    <div key={image.id} className="gallery-item">
                        <img
                            src={image.imageUrl}
                            alt={image.title}
                            onClick={() => handleImageClick(image.id)}
                        />
                        <div className="gallery-overlay">
                            <h3>{image.alt}</h3>
                            <p>{image.details}</p>
                        </div>
                    </div>
                ))}
                {activeImage !== null && (
                    <div className="gallery-modal" onClick={handleOverlayClick}>
                        <img
                            src={images.find((image) => image.id === activeImage)?.src}
                            alt={images.find((image) => image.id === activeImage)?.alt}
                        />
                    </div>
                )}

                <div>

                </div>
            </div>
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

export default Gallery