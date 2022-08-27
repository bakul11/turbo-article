import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Zoom } from 'react-reveal';
import swal from 'sweetalert';
import './MyPost.css';
import auth from './../../Firebase/FirebaseConfig';
import MyPostAnimate from './../../Animation/MyPostAnimate';

const MyPost = () => {
    const [userPosts, setUserPost] = useState([]);
    const [loader, setLoader] = useState(true);

    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:5000/article/${user.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => {
                setUserPost(data);
                setLoader(false);
            })
            .catch(err => {
                setLoader(true);
            })
    }, [user])

    const deletePost = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, You won't be able to revert this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/article/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            const remaingData = userPosts.filter(post => post._id !== id);
                            setUserPost(remaingData);
                            swal("Delete! Your post file has been deleted!", {
                                icon: "success",
                            });
                        })
                        .catch(err => {
                            swal('Post Fail', 'Your Post is fail done', 'error');
                        })
                } else {
                    swal("Your article post file is safe!");
                }
            });
    }

    return (
        <div className=' cosntainer m-5'>
            <h2 className='text-center fs-4 mb-4'>My Posted Blog: {userPosts?.length === 0 ? <span className='text-danger'>No Blog Found</span> : userPosts?.length}</h2>

            <div className="row row-cols-1  row-cols-md-2 mx-auto g-4">
                {userPosts.map((myBlog) =>
                    <div key={myBlog._id} class="col ">
                        <Zoom>
                            <div className="shadow-lg  border-0 p-3 blog-sec  rounded">
                                <div className="text-center"> <img src={myBlog.photo} alt={myBlog.title} className="img-fluid d-block w-100 " style={{ height: '150px' }}></img></div>
                                <h5 className="text-primary blogTitle mt-2">
                                    {myBlog.title}
                                </h5>
                                <p className="text-secondary">
                                    {myBlog.disc.length > 100 ? myBlog.disc.slice(0, 100) : myBlog.disc}
                                </p>
                                <div className="postUser">
                                    <p>
                                        <FontAwesomeIcon icon={faUser} className="me-2 text-danger" />
                                        <span className="text-secondary">{myBlog.userDisplayName}</span>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faCalendar} className="me-2 text-danger" />
                                        <span className="text-secondary">  {myBlog.postDateTime}</span>
                                    </p>
                                </div>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <button onClick={() => deletePost(myBlog._id)} className='btn btn-danger' >Delete post</button>
                                </div>

                            </div>
                        </Zoom>

                    </div>
                )}
            </div>
            <div>

            </div>

            {/* Set Loader  */}
            {
                loader ? <>

                    <MyPostAnimate />
                    <MyPostAnimate />
                </> : ''
            }
        </div>
    );
};

export default MyPost;