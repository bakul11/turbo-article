import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Animate2 from '../../../Animation/Aminate2';
import RecentPostCart from './RecentPostCart';



const RecentPost = () => {
    const [getPost, setGetPost] = useState([]);
    const [loader, setLoader] = useState(true);

    //load all recent post
    useEffect(() => {
        fetch(('http://localhost:5000/article'))
            .then(res => res.json())
            .then(data => {
                setLoader(false);
                setGetPost(data);
            })
            .catch(err => {
                setLoader(true);
            })
    }, [])



    return (
        <div className='mb-5'>
            <h4 className='text-decoration-underline'>Recent Post</h4>

            <div className="row gy-3">
                {
                    getPost.map(post => <RecentPostCart post={post} key={post._id} />)
                }
                {
                    loader ? <>
                        <Animate2 />
                        <Animate2 />
                        <Animate2 />
                        <Animate2 />
                    </> : ''
                }
            </div>
        </div>
    );
};

export default RecentPost;