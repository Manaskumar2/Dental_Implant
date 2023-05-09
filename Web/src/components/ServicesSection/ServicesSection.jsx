import "./ServicesSection.css";
import { client } from "../../lib/client"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ServicesSection = () => {
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
      } | order(publishedAt desc)
    `).then((data) => {
      setServiceCard(data)
    })
      .catch(console.error);
  }, [])

  const displayedCards = ServiceCard.slice(0, 3); // Display only the first three cards

  return (
    <>
      <section className='services-section'>
        <div className='services-header'>
          <h2 className='services-header-text'>Our Services</h2>
        </div>

        <p className='services-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, rem sapiente? Excepturi perferendis voluptate laudantium iusto alias nisi harum provident aspernatur expedita! Molestias
          reiciendis maiores ratione doloremque minima amet ipsum.
        </p>
      </section>

      <div className="services-container">
        {displayedCards.map((ServicesCard) => (
          <Link to={`/services/${ServicesCard.slug.current}`} key={ServicesCard.slug.current}>
            <div className="card">
              <div className="card-header">
                {ServicesCard.mainImage && (
                  <img src={ServicesCard.mainImage.asset.url} alt={ServicesCard.mainImage.alt} className="h-64"/>
                )}
              </div>
              <div className="card-body">
                <h2 className="card-title capitalize">{ServicesCard.title}</h2>
                <p className="card-description leading-relaxed">
                  {`${ServicesCard.body[0].children[0].text.substring(0, 140)}...`}
                </p>
                <button  className="card-button">
                  Read More &rarr;
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link to={`/services`}>
        <div className='btn-container'>
          <button  className='all-services-button'>
            View all Services
          </button>
        </div>
      </Link>
      

    </>
  );
};

export default ServicesSection;
