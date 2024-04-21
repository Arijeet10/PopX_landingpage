"use client";

import { useRouter } from "next/navigation";

const Home = () => {

  const router=useRouter();

  return ( 
    <div className="bg-[#F7F8F9]">
            <div className="px-[20px] w-full absolute bottom-[41px] ">
                <div className="text-[28px] text-[#1D2226] font-medium">Welcome to PopX</div>
                <div className="text-[#1D2226] text-lg mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                <div className="flex flex-col gap-[10px] mt-[29px]">
                    <button onClick={()=>router.push("/signup")} className="py-2 bg-[#6C25FF] text-[#FFFFFF] font-medium text-base rounded-md">Create Account</button>
                    <button onClick={()=>router.push("/login")} className="py-2 bg-[#6C25FF4B] text-[#1D2226] font-medium text-base rounded-md">Already Registered? Login</button>
                </div>
            </div>
    </div>
   );
}
 
export default Home;