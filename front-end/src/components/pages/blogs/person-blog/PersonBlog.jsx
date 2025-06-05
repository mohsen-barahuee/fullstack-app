import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../../modules/banner/banner";
import Loading from "../../../modules/loading/Loading";

export default function PersonBlog() {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function dataFetcher() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/blogs/${params.id}`
        );
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }

    dataFetcher();
  }, [params.id]);

  console.log(blog);

  if (loading) {
    return <Loading />; // show this until blog is ready
  }

  return (
    <>
      <Banner />
      <div className="mt-24 lg:mt-72 md:px-20 container">
        <div className="flex px-5 md:px-0  flex-col gap-y-4 md:gap-y-10">
          <img
            data-aos="zoom-in-down"
            src={blog.image}
            className=" w-full h-[200px] md:h-[500px]"
            alt=""
          />
          <div  className=" flex gap-y-2 md:gap-y-5 flex-col">
            <h3 className="text-3xl font-Oswald tracking-widest uppercase  text-secondary">
              {blog.title}
            </h3>
            <div className="flex flex-col gap-y-3 child:text-text-color text-sm font-Didact-Gothic">
              <p>{blog.body}</p>
            </div>
          </div>
        </div>
        <div className="flex px-5 flex-wrap lg:flex-nowrap justify-center gap-y-20  md:gap-x-52 my-20 font-Didact-Gothic">
          <div className="flex gap-x-4 md:gap-x-10">
            <div>
              <img 
                src="/images/team/1.jpg"
                className="w-32 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-4 items-center">
                <span className="text-secondary capitalize ">robert misse</span>
                <span className="text-sm text-text-color">29 october 2023</span>
              </div>
              <div>
                <p className="text-text-color text-sm">
                  Photography ultricies rtbh non dolor maximus scaleue inte
                  molliser foubs neque nec tincidunte cliquam erat volutpat.
                  Proeser tempor molade yap.
                </p>
              </div>
              <button className="flex items-center gap-x-1 capitalize text-xs text-secondary ">
                replay
                <svg className="w-4 h-4">
                  <use href="#arrow-uturn"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-auto gap-y-4">
            <span className="text-nowrap text-secondary font-Didact-Gothic">
              Leave a Reply
            </span>
            <input
              className="outline-none  lg:w-52  py-3 bg-transparent border-t border-text-color capitalize font-Didact-Gothic text-sm"
              placeholder="your comment*"
              type="text"
            />
          </div>
        </div>
        <div className="flex px-5 lg:justify-end mb-20 lg:mb-40">
          <button className="bg-secondary w-full lg:w-auto uppercase transition-all hover:bg-transparent border border-secondary font-Oswald tracking-widest py-3 lg:px-8 lg:py-2">
            send
          </button>
        </div>
      </div>
    </>
  );
}
