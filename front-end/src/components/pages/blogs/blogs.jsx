import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../modules/banner/banner";
import Loading from "../../modules/loading/Loading";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const [loading, setLoading] = useState(true);

  console.log(process.env.REACT_APP_API_URL);
  
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/blogs/`
        );
        const data = await response.json();
        setBlogs(data.getBlog.reverse());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Logic for displaying current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Logic for page numbers
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Banner />
      <div className=" container mt-28 md:mt-0  lg:mb-40">
        <div className="px-5 lg:px-0 mt-20 md:mt-40 lg:mt-72  z-10">
          <div className="uppercase   flex  gap-x-4 my-10 justify-start md:justify-start text-4xl lg:text-5xl font-Oswald tracking-widest">
            <h3>our</h3>
            <h3 className="text-secondary">blog</h3>
          </div>
          <div className="flex flex-col gap-y-20">
            {currentBlogs.map((items, index) => {
              return (
                <div
                  data-aos={
                    index % 2 === 0 ? "fade-down-right" : "fade-down-left"
                  }
                  key={index}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }  items-center gap-y-8 gap-x-20`}
                >
                  <img
                    src={items.image}
                    className=" w-[400px] h-[250px] lg:w-[600px] lg:h-[400px]"
                    alt=""
                  />
                  <div className="flex gap-x-5 items-center">
                    <div className="flex flex-col items-center gap-y-1 uppercase font-Oswald">
                      <span className=" text-5xl lg:text-6xl text-secondary">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-nowrap text-text-color">
                        dec 2021
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-4 uppercase font-Oswald tracking-widest">
                      <span className="text-secondary text-sm">
                        {items.writer.firstname}/ {items.writer.lastname}
                      </span>
                      <span className=" text-2xl">{items.title}</span>
                      <Link
                        to={`/blogs/${items._id}`}
                        className="flex items-center text-sm  gap-x-4 text-secondary uppercase"
                      >
                        <div className="w-5 h-[1.5px] bg-secondary "></div>
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => {
                setCurrentPage(number);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className={`ml-5 border  border-secondary text-secondary transition-all duration-150 hover:bg-secondary hover:text-white w-10 h-10 rounded-full `}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
