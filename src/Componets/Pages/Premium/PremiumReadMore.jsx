import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import TableAnimate from '../../Animation/TableAnimate';

const PremiumReadMore = () => {
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const url = `https://whispering-ridge-30056.herokuapp.com/premiumSingleArticle/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setLoader(false);
            })
            .catch(err => {
                setLoader(true);
            })
    }, [id]);
    return (
        <div className='container-fluid ps-5 pe-2' style={{ marginTop: '150px' }}>
            <div className="row">
                <div className="col-lg-8">
                    {
                        loader ? <TableAnimate /> : ''
                    }
                    <div className="blog-content">
                        <img src={article?.photo} alt="article" className='img-fluid mb-5' />
                        <h4 className='fw-bold mb-3'>{article?.title}</h4>
                        <div className="postUser d-flex flex-wrap justify-content-between w-50">
                            <p>
                                <FontAwesomeIcon icon={faUser} className="me-2 text-danger" />
                                <span className="text-secondary">{article?.writer}</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCalendar} className="me-2 text-danger" />
                                <span className="text-secondary">  {article?.postDateTime}</span>
                            </p>
                        </div>
                        <div className="blog-title-sec pt-4">
                            <p className='lh-lg'>{article?.disc}</p>
                        </div>
                        <div className="thanks mt-5">
                            <h5 className='text-primary'>Thanks you for reading our Premium Articles</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumReadMore;