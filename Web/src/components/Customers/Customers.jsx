import { useEffect, useState } from "react";
import "./Customer.css";
import { client } from "../../lib/client";


const Customers = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        client.fetch(`
        *[_type == "reviews"] {
          "imageUrl":image.asset->url,
          title,
          description,
        }
      `).then((data) => {
            setReviews(data);
        }).catch(console.error);
    }, []);

    const displayedReviews = reviews.slice(0, 3); // Display only the first six images


    return (
        <div className="customer-section">
            <div className="customer-header">
                <h2>Our Happy Customers</h2>
            </div>

            <p className="customer-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                fugit dignissimos quae veniam debitis hic, deserunt ipsam ut distinctio
                libero earum quaerat non perferendis cupiditate, eligendi autem, optio
                sed magnam!
            </p>

            <div className="customer-card-container">
                {displayedReviews.map((review) => {
                    return (
                        <div className="customer-card" key={review._id}>
                            <div className="customer-card__image">
                                <img
                                    src={review.imageUrl}
                                    alt={review.title}
                                />
                            </div>

                            <div className="customer-title">
                                <h3>{review.title}</h3>
                            </div>

                            <div className="customer-review">{review.description}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Customers;
