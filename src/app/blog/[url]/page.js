import React from "react";
import { fetchBlogDetails } from "../../../../components/Api";
const BlogDetails = async ({ params }) => {
  const { url } = params;
  const blogDetails = await fetchBlogDetails(url);
  return (
    <>
      {blogDetails && (
        <div>
          <section className="hero herocontainer">
            <div className="container">
              <div className="row justify-content-center blog-details">
                <div className="col-lg-10">
                  <h1 className="text-center pb-5 d-block">
                    {blogDetails.title}
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-lg-6">
            <div className="container">
              <div className="row justify-content-center blog-details">
                <div className="col-lg-10">
                  <p>
                    Category <strong>{blogDetails.cat_name}</strong> Posted On{" "}
                    <strong>{blogDetails.created}</strong>
                  </p>
                  <img
                    className="card-img"
                    src={`https://console.authkey.io/blogimages/${blogDetails.image_name}`}
                    alt={blogDetails.page_title}
                  />
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: blogDetails.post_details,
                    }}
                  />
                  <p>
                    Tags:{" "}
                    <span className="badge badge-primary">
                      {blogDetails.tag}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
