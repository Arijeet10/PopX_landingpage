"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {

  const router=useRouter();

  const [login,setLogin]=useState({
    email:"",
    password:""
  });

  const handleLogin=()=>{
    console.log(login);
    if(login.email!=="" && login.password!==""){
      router.push("/profile");
    }else{
      alert("Fill up your credentials to login");
    }
  }

  return (
    <>
      <div className="px-[20px] w-full flex flex-col bg-[#F7F8F9]">
        <div className="mt-[40px] text-[28px] text-[#1D2226] font-medium">
          Signin to your
          <br />
          PopX account
        </div>
        <div className="mt-[14px] text-[#1D2226] text-lg opacity-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[14px] mt-[24px]  ">
            <fieldset className="border border-[#CBCBCB] rounded-lg  ">
              <legend className=" ml-[14px] pl-[5px] pr-[13px] text-[#6C25FF] text-[13px]">Email Address</legend>
              <input type="email" placeholder="Enter email address" value={login.email} onChange={(e)=>{setLogin({...login,email:e.target.value})}} className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg w-full bg-[#F7F8F9] " />
            </fieldset>
            <fieldset className="border border-[#CBCBCB] rounded-lg">
              <legend className="ml-[14px] pl-[5px] pr-[39px] text-[#6C25FF] text-[13px]">Password</legend>
              <input type="password" placeholder="Enter password" value={login.password} onChange={(e)=>{setLogin({...login,password:e.target.value})}} className="px-[16px] pb-[11px] focus:outline-none text-sm rounded-lg w-full bg-[#F7F8F9]" />
            </fieldset>
          </div>
          <div>
            <button onClick={()=>handleLogin()} className="py-2 w-full bg-[#CBCBCB] text-[#FFFFFF] font-medium text-base rounded-md">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
