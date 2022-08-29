import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import Comment from '../CommentBox/Comment';

const ReadRecent = () => {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/singleArticle/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setArticle(data)
            })
    }, [id])

    return (
        <div className="container" style={{ marginTop: '150px', marginBottom: '100px' }}>
            <div className="blog-content">
                <img src={article?.photo} alt="article" className='img-fluid mb-5' />
                <h4 className='fw-bold mb-3'>{article?.title}</h4>
                <div className="postUser d-flex flex-wrap justify-content-between w-50">
                    <p>
                        <FontAwesomeIcon icon={faUser} className="me-2 text-danger" />
                        <span className="text-secondary">{article?.userDisplayName}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCalendar} className="me-2 text-danger" />
                        <span className="text-secondary">  {article?.postDateTime}</span>
                    </p>
                </div>
                <div className="blog-title-sec pt-4">
                    <p className='text-dark lh-lg'>{article?.disc}</p>
                </div>
                <div className="thanks mt-5">
                    <h5 className='text-primary'>Thanks you for reading our Articles</h5>
                </div>
            </div>
            {/* add comment box */}
            <Comment />
        </div>
    );
};

export default ReadRecent;