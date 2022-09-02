import React from 'react';
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Zoom } from "react-reveal";
import "./PremiumCart.css";
import { faUser, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const PremiumCart = ({ premiumArticle }) => {
    const { _id, title, photo, disc, postDateTime, writer } = premiumArticle;

    //Handle Read More
    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate(`/premiumArticleReadMore/${_id}`);
    };
    return (
        <div className="col-lg-4 col-md-6  col-12">
            <Zoom>
                <div className="shadow-lg p-3 blog-sec">
                    <img src={photo} alt={title} className="img-fluid w-100" style={{ height: '150px', cursor: 'pointer' }} onClick={handleReadMore}></img>

                    <h5 className="text-primary blogTitle mt-2" onClick={handleReadMore}>
                        {title}
                    </h5>
                    <p className="text-secondary">
                        {disc.length > 100 ? disc.slice(0, 80) : disc}.....
                    </p>
                    <div className="postUser">
                        <p>
                            <FontAwesomeIcon icon={faUser} className="me-2 text-danger" />
                            <span className="text-secondary text-capitalize">{writer}</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCalendar} className="me-2 text-danger" />
                            <span className="text-secondary">  {postDateTime}</span>
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleReadMore}
                    >
                        Read More{" "}
                        <FontAwesomeIcon icon={faHandPointRight} className="ms-2" />
                    </button>
                </div>
            </Zoom>
        </div>
    );
};

export default PremiumCart;