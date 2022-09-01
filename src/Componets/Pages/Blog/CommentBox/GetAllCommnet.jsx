import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CommentCart from './CommentCart';
import TableAnimate from './../../../Animation/TableAnimate';
import './GetAllCommnet.css';

const GetAllCommnet = ({ id }) => {
    const [comment, setComment] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch(`https://whispering-ridge-30056.herokuapp.com/filterCommnet/${id}`)

            .then(res => res.json())
            .then(result => {
                setComment(result);
                setLoader(false);
            })
            .catch(err => {
                setLoader(true)
            })
    }, [comment, id])

    return (
        <div className='comment-sec mt-4'>
            <h6 className='text-danger fs-4 text-decoration-underline'>See all comments</h6>
            <p>
                {comment.length === 0 ? <span className='text-secondary mt-2'>No comment</span> : ""}
            </p>
            <div className="row gy-3">
                {
                    comment.map(singleComment => <CommentCart singleComment={singleComment} key={singleComment._id} />)
                }

            </div>

            {
                loader ? <>
                    < TableAnimate />
                    < TableAnimate />
                </> : ''
            }
        </div>
    );
};

export default GetAllCommnet;