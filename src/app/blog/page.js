import React from "react";
import Link from "next/link";
import { getBlogPost } from "../../../components/Api";
import { Calendar3 } from "react-bootstrap-icons";

export const metadata = {
  title: "Blog | Authkey",
  description: "Find latest blog of Authkey.io",
  alternates: {
    canonical: "https://authkey.io/blog",
  },
};
const Blog = async () => {
  let allFaqList = await getBlogPost().then((res) => {
    return res.data.data;
  });
  return (
    <div>
      <section className="hero herocontainer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-left">
              <div className="help-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-lg-6">
        <div className="container">
          <div className="row justify-content-center items-align-center">
            <div className="col-lg-12">
              {allFaqList ? (
                <div className="row">
                  {allFaqList.map((item, i) => (
                    <div className="col-md-6" key={i}>
                      <div className="card">
                        <img
                          className="card-img"
                          src={
                            "https://console.authkey.io/blogimages/" +
                            item.image_name
                          }
                          alt={item.page_title}
                        />
                        <div className="blog-tag">
                          <Link href="/" className="btn btn-light btn-sm">
                            SMS
                          </Link>
                        </div>
                        <div className="card-body">
                          <Link href={`/blog/${item.url}`}>
                            <h4 className="blog-card-title mt-2">
                              {item.page_title}
                            </h4>
                          </Link>
                          <small className="text-muted cat">
                            <Calendar3 /> {item.created}
                          </small>
                          <div className="card-text blog-short-content mt-3">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.post_details,
                              }}
                            />
                          </div>
                          <Link
                            href={`/blog/${item.url}`}
                            className="btn btn-sm btn-info"
                          >
                            Read More..
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <b className="text-center">Blog Loading....</b>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
