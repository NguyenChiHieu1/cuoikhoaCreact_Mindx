import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi"

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog">
                  
                  <HiOutlineArrowLeft />Go back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-3.webp"
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  You're only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury -
                  it's not something people need, but it's what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money. Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a acc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
