import React, { useEffect, useState } from "react";
import { FiMail, FiUser } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";

const Setting = () => {
  const initialData = { email: "", name: "", country: "" };
  const [data, setData] = useState(initialData);
  const handleSave = () => {
    alert("Save clicked");
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const apiData = {
      email: "ahmed@mailinator.com",
      name: "ahmed",
      country: "Pakistan"
    };
    setData(apiData);
  }, []);
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold panel-primary-text">
          My Profile
        </h2>
        <button
          className="panel-primary-bg rounded-xl px-6 p-2 text-white font-bold hover:scale-105 transition-all duration-500"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="relative bg-white h-[80vh] overflow-y-auto mt-4 rounded-md p-2 flex justify-center items-start">
        <div>
          <div className="flex flex-col items-center mt-6 mb-8">
            <div className="w-full flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="mb-5 w-32 rounded-full outline outline-offset-4 outline-1 outline-red-500"
                alt="Avatar"
              />
            </div>
            <input type="file" id="image" name="image" hidden />
            <label htmlFor="image">
              <div className="text-center cursor-pointer panel-primary-bg rounded-sm px-4 p-2 w-56 text-white font-bold hover:scale-105 transition-all duration-500">
                Upload
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-y-5 h-full justify-between">
            <div className="flex relative items-center ">
              <FiMail className=" absolute left-1 w-6 h-6 ml-2 panel-primary-text" />
              <input
                className="cursor-not-allowed pl-12 w-96 h-12 rounded border-red-500 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="email"
                placeholder="Email Address"
                readOnly
                name="email"
                value={data.email}
              />
            </div>
            <div className="flex relative items-center ">
              <FiUser className="absolute left-1  w-7 h-7 ml-2 p-1 panel-primary-text" />
              <input
                className="pl-12 w-96 h-12 rounded border border-red-500 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="text"
                name="name"
                placeholder="User Name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex relative items-center">
              <BsGlobe className="absolute left-1  w-7 h-7 ml-2 p-1 panel-primary-text" />
              <input
                className="pl-12 w-96 h-12 rounded border-red-500 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
