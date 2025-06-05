import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../modules/loading/Loading";

export default function Register() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const formData = new FormData();

  const signupHandler = async () => {
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/register`,

      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    if (response.status === 200) {
      navigate("/");
    }
  };
  const loginHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: email, password }),
      }
    );

    if (response.status === 200) {
      navigate("/");
      window.location.reload();
    }
  };



  return (
    <div className="mt-52 px-[380px]">
      <div className=" relative flex justify-center overflow-hidden bg-card-color p-10 rounded-lg">
        <div className="w-full flex flex-col gap-y-5 items-center">
          <div className="flex  justify-between w-full items-center">
            <span className="text-5xl text-nowrap uppercase font-Oswald tracking-widest text-secondary">
              Login Form
            </span>
            {!login && (
              <div className="relative cursor-pointer">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center cursor-pointer">
                  <span className="text-white capitalize font-Didact-Gothic tracking-wider cursor-pointer">
                    choose file
                  </span>
                </div>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  className="absolute top-0 w-20 h-20 rounded-full cursor-pointer opacity-0"
                />
              </div>
            )}
          </div>
          {!login ? (
            <div className="  text-white w-full flex flex-col gap-y-8   child:capitalize font-Oswald tracking-widest   ">
              <div className="w-full relative login-input-hover  ">
                <label className=" absolute transition-all bg-card-color left-6  -top-3 px-2 text-secondary   ">
                  first name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstname}
                  type="text"
                  className="w-full h-full pl-2 py-4 bg-transparent border border-secondary outline-none "
                />
              </div>

              <div className="w-full relative login-input-hover  ">
                <label className=" absolute transition-all bg-card-color left-6  -top-3 px-2 text-secondary   ">
                  last name
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastname}
                  type="text"
                  className="w-full h-full pl-2 py-4 bg-transparent border border-secondary outline-none "
                />
              </div>
              <div className="w-full relative login-input-hover  ">
                <label className=" absolute transition-all bg-card-color left-6  -top-3 px-2 text-secondary   ">
                  email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  className="w-full h-full pl-2 py-4 bg-transparent border border-secondary outline-none "
                />
              </div>

              <div className="w-full relative login-input-hover  ">
                <label className=" absolute transition-all bg-card-color left-6  -top-3 px-2 text-secondary   ">
                  password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="text"
                  className="w-full h-full pl-2 py-4 bg-transparent border border-secondary outline-none "
                />
              </div>
            </div>
          ) : (
            <div className="  text-white w-full flex flex-col gap-y-8   child:capitalize font-Oswald tracking-widest   ">
              <div className="w-full relative login-input-hover  ">
                <label className=" absolute transition-all bg-card-color left-6  -top-3 px-2 text-secondary   ">
                  email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  className="w-full h-full pl-2 py-4 bg-transparent border border-secondary outline-none "
                />
              </div>

              <div className="w-full relative login-input-hover  ">
                <label className=" absolute transition-all bg-card-color left-6  -top-3 px-2 text-secondary   ">
                  password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="text"
                  className="w-full h-full pl-2 py-4 bg-transparent border border-secondary outline-none "
                />
              </div>
            </div>
          )}
          {login ? (
            <button
              onClick={loginHandler}
              className="w-full py-5 bg-secondary uppercase"
            >
              login{" "}
            </button>
          ) : (
            <button
              onClick={signupHandler}
              className="w-full py-5 bg-secondary uppercase"
            >
              SIGN UP
            </button>
          )}
          <span
            className="text-secondary underline capitalize text-sm cursor-pointer font-Didact-Gothic tracking-wider"
            onClick={() => setLogin(!login)}
          >
            {login ? "signup" : " i already have account"}
          </span>
        </div>
      </div>
    </div>
  );
}
