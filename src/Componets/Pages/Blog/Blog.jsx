import React, { useEffect, useState } from "react";
import Animate from "../../Animation/Animate";
import BlogCart from "./BlogCart";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CategoryBlog from "./CategoryBlog/CategoryBlog";

const Blog = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  //load api
  useEffect(() => {
    fetch("https://whispering-ridge-30056.herokuapp.com/article")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  return (
    <div
      className="container"
      style={{ marginTop: "150px", marginBottom: "100px" }}
    >
      <div className="blog-title text-center mb-5">
        <h3 className="fw-bold fs-4">Our Letest Blog</h3>
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
        {content.map((blog) => (
          <BlogCart blog={blog} key={blog._id} />
        ))}
      </div>
      <div className="row gy-4">
        {loading ? (
          <>
            <Animate />
            <Animate />
            <Animate />
            <Animate />
            <Animate />
            <Animate />
            <Animate />
            <Animate />
            <Animate />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Blog;
