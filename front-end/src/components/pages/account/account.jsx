import React, { useEffect, useState } from "react";
import InsertBlog from "../../modules/insert-blog/InsertBlog";
import { useNavigate } from "react-router-dom";
import Loading from "../../modules/loading/Loading";

export default function Account() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const [token, setToken] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((respnse) =>
      respnse.json().then((data) => {
        setToken(data.user);
        setLoading(false)
      })
    );
  }, []);

  if (token === undefined) {
    navigate("/");
  }

  if(loading){
    return <Loading/>
  }

  return (
    <div className=" my-40 m:my-72 px-5 container">
      <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap justify-center gap-y-5 md:gap-x-10">
        <InsertBlog writer={token._id} />
        <div className="  border border-text-color rounded-md max-h-56 px-10 p-2">
          <div className="flex justify-center items-center gap-x-5">
            <span className="text-nowrap">Email : {token.email}</span>
            <img src={token.image} alt="" className="  w-20 h-20 rounded-full" />
          </div>
          <div className="my-5">
            <ul className=" child:mt-5 child:border-b child:w-full">
              <li>
                first name :  {token.firstname}
              </li>
              <li>
                last tname :  {token.lastname}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
