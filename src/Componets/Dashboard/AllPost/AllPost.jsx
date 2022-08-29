import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Zoom } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import MyPostAnimate from './../../Animation/MyPostAnimate';

const AllPost = () => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    //load api
    useEffect(() => {
        fetch("https://whispering-ridge-30056.herokuapp.com/article")
            .then((res) => res.json())
            .then((data) => {
                setContent(data);
                setLoading(false);
                console.log(data);
            })
            .catch((err) => {
                setLoading(true);
            });
    }, []);

    // Delete Post 
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
                    fetch(`https://whispering-ridge-30056.herokuapp.com/article/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            const remaingData = content.filter(post => post._id !== id);
                            setContent(remaingData);
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
            <h2 className='text-center fs-4 mb-4'>All Users Posts: {content?.length === 0 ? <span className='text-danger'>No Post Found</span> : content?.length}</h2>

            <div className="row row-cols-1  row-cols-md-2 mx-auto g-4">
                {content.map((myBlog) =>
                    <div key={myBlog._id} class="col ">
                        <Zoom>
                            <div className="shadow-lg  border-0 p-3 blog-sec" style={{ minHeight: '390px', borderRadius: '20px' }}>
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
                loading ? <>

                    <MyPostAnimate />
                    <MyPostAnimate />
                </> : ''
            }
        </div>
    );
};

export default AllPost;