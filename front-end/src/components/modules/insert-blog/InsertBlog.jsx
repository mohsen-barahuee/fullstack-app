import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertBlog({ writer }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigator = useNavigate()

  if (image) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };

    fileReader.readAsDataURL(image);
  }


  const formData = new FormData();

  const createBlogHandler = async () => {
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/blogs/create`,
      {
        method: "POST",
        credentials: "include",

        body: formData,
      }
    );

    if(response.status === 201){
      alert("Blog created")
      navigator('/blogs')
    }
  };

  return (
    <div className=" border px-4 py-5">
      <div>
        <div className="w-full relative cursor-pointer">
          <div className="lg:w-[500px] lg:h-[200px] bg-gray-300/10 p-4  cursor-pointer flex justify-center items-center">
            {preview ? (
              <img src={preview} className="w-full h-full" alt="preview" />
            ) : (
              <span className="text-text-color text-xl text-nowrap  md:text-2xl capitalize font-Didact-Gothic">
                upload picture for the title
              </span>
            )}
          </div>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className=" absolute top-0 w-full h-full bg-black opacity-0  cursor-pointer "
          />
        </div>
        <div className="  font-Didact-Gothic">
          <di className="text-white child:p-4 child:pt-2 child:outline-none child:bg-transparent child:border child:border-text-color child:mt-5">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="w-full capitalize"
              placeholder="title"
            />
          </di>
          <div className="text-white child:pl-4 child:pt-2 child:outline-none child:bg-transparent child:border child:border-text-color child:mt-5">
            <textarea
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="w-full h-28 capitalize"
              name=""
              placeholder="body"
            ></textarea>
          </div>
          <button
            onClick={createBlogHandler}
            className="w-full mt-2 py-2 font-Oswald tracking-wide text-xl uppercase bg-secondary"
          >
            post the blog
          </button>
        </div>
      </div>
    </div>
  );
}
