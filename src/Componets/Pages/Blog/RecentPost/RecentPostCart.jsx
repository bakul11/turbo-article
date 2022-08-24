import React from 'react';
import './RecentPostCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const RecentPostCart = ({ post }) => {
    const { title, photo, userDisplayName, postDateTime, _id } = post;

    //Navigate
    const navigate = useNavigate();
    const handleReadRecent = () => {
        navigate(`/recent/${_id}`);
    }

    return (
        <div className='col-lg-12'>
            <div className="shadow-lg p-3 d-flex recentPost">
                <div className="post-thub">
                    <img src={photo} alt={title} className='img-fluid rounded recentPhoto' style={{ height: '70px', width: '100px', cursor: 'pointer' }} onClick={handleReadRecent} />
                </div>
                <div className="post-content ms-2">
                    <h6 className='text-primary fw-bold' onClick={handleReadRecent} style={{ cursor: 'pointer' }}>{title}</h6>
                    <p className='text-secondary m-0 text-capitalize'><FontAwesomeIcon icon={faUser} className='text-danger me-2' />{userDisplayName}</p>
                    <p className='text-secondary'><FontAwesomeIcon icon={faCalendar} className="me-2 text-danger" />{postDateTime}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentPostCart;