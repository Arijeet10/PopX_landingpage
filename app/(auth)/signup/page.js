"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [signup, setSignup] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleSignup = () => {
    //console.log(signup);
    if (
      signup.fullname!=="" &&
      signup.phoneNumber!=="" &&
      signup.email!=="" &&
      signup.password!=="" &&
      signup.agency!==""
    ) {
      router.push("/login");
    } else {
      alert("please fill up all the required fields");
    }
  };

  return (
    <>
      <div className="px-[20px] w-full flex flex-col bg-[#F7F8F9]">
        <div className="mt-[40px] font-medium text-[28px] text-[#1D2226]">
          Create your
          <br />
          PopX account
        </div>
        <div className="flex flex-col gap-[20px] mt-[22px] text-[13px]">
          <fieldset className="border border-[#CBCBCB] rounded-lg ">
            <legend className=" ml-[14px] pl-[5px] pr-[26px] text-[#6C25FF] text-[13px]">
              Full Name<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input
              type="text"
              placeholder="Enter full name"
              required
              value={signup.fullname}
              onChange={(e) => {
                setSignup({ ...signup, fullname: e.target.value });
              }}
              className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg bg-[#F7F8F9] w-full"
            />
          </fieldset>
          <fieldset className="border border-[#CBCBCB] rounded-lg ">
            <legend className=" ml-[14px] pl-[5px]  text-[#6C25FF] text-[13px]">
              Phone Number<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input
              type="tel"
              placeholder="Enter phone number"
              required
              value={signup.phoneNumber}
              onChange={(e) => {
                setSignup({ ...signup, phoneNumber: e.target.value });
              }}
              className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg bg-[#F7F8F9] w-full"
            />
          </fieldset>
          <fieldset className="border border-[#CBCBCB] rounded-lg ">
            <legend className=" ml-[14px] pl-[5px] pr-[1px] text-[#6C25FF] text-[13px]">
              Email address<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input
              type="email"
              placeholder="Enter email address"
              required
              value={signup.email}
              onChange={(e) => {
                setSignup({ ...signup, email: e.target.value });
              }}
              className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg bg-[#F7F8F9] w-full"
            />
          </fieldset>
          <fieldset className="border border-[#CBCBCB] rounded-lg ">
            <legend className=" ml-[14px] pl-[5px] pr-[23px] text-[#6C25FF] text-[13px]">
              Password<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={signup.password}
              onChange={(e) => {
                setSignup({ ...signup, password: e.target.value });
              }}
              className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg bg-[#F7F8F9] w-full"
            />
          </fieldset>
          <fieldset className="border border-[#CBCBCB] rounded-lg ">
            <legend className=" ml-[14px] pl-[5px] text-[#6C25FF] text-[13px]">
              Company name
            </legend>
            <input
              type="text"
              placeholder="Enter company name"
              value={signup.company}
              onChange={(e) => {
                setSignup({ ...signup, company: e.target.value });
              }}
              className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg bg-[#F7F8F9] w-full"
            />
          </fieldset>
        </div>
        <div className="mt-[18px]">
          <div className="text-[13px]">
            Are you an Agency?<span className="text-[#DD4A3D]">*</span>
          </div>
          <div className="flex items-center gap-[23px] mt-[13px]">
            <div className="flex items-center gap-[12px]">
              <input
                id="yes"
                type="radio"
                name="agency"
                value="Yes"
                onChange={(e) => {
                  setSignup({ ...signup, agency: true });
                }}
                className="accent-[#6C25FF]"
              />
              <label htmlFor="yes" className="text-sm">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-[12px]">
              <input
                id="no"
                type="radio"
                name="agency"
                value="No"
                onChange={(e) => {
                  setSignup({ ...signup, agency: false });
                }}
                className="accent-[#6C25FF]"
              />
              <label htmlFor="no" className="text-sm">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[20px] absolute bottom-[30px]  w-full bg-[#F7F8F9]">
          <button
            onClick={() => handleSignup()}
            className=" py-[13.84px] w-full  bg-[#6C25FF] text-[#FFFFFF] font-medium text-base rounded-md"
          >
            Create Account
          </button>
        </div>
    </>
  );
};

export default Register;
