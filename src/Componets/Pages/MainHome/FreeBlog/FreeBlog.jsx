import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import BlogCart from './../../Blog/BlogCart';

const FreeBlog = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  //load api
  useEffect(() => {
    fetch("http://localhost:5000/article")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, [content]);

  return (
    <div className='container'>
      <div className="blog-title text-center mb-5">
        <h3 className='fw-bold fs-4'>Our Letest Free Blog</h3>
        <div className="div d-flex align-items-center justify-content-center m-0 p-0">
          <div
            className="bg-danger rounded-circle"
            style={{ height: "4px", width: "80px" }}
          ></div>
          <div className="">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="ms-2" />
          </div>
          <div
            className="bg-danger rounded-circle"
            style={{ height: "4px", width: "80px" }}
          ></div>
        </div>
        <h6 className="text-secondary">
          Please Read our blog and learn new technology
        </h6>
      </div>

      <div className="row gy-4">
        {content.slice(0, 3).map((blog) => (
          <BlogCart blog={blog} key={blog._id} />
        ))}
      </div>
      <div className="load text-center">
        {
          loading ? <span className='text-center'>Loading......</span> : ''
        }
      </div>
    </div>
  );

};

export default FreeBlog;