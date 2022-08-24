import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CommentCart = ({ singleComment }) => {
    const { commnet, userDisplayName } = singleComment;
    return (
        <div className='col-lg-12'>
            <div className="shadow-sm d-flex flex-wrap p-2">
                <div className="comment-thub">
                    <FontAwesomeIcon icon={faUserCircle} className='text-warning fs-2' />
                </div>
                <div className="commment-title ms-3">
                    <h6 className='fs-6 m-0 p-0'>{userDisplayName}</h6>
                    <p className='text-secondary m-0 p-0'>{commnet}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentCart;