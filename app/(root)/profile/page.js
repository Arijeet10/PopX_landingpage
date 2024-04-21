const Profile = () => {
    return ( 
        <>
            <div className="text-[#1D2226]">
                <div className="pl-[15px] pt-[27px] pb-[19px] text-lg capitalize bg-[#FFFFFF]">Account Settings</div>
                <div className="pl-[20px] pr-[18px] pt-[30px] bg-[#F7F8F9]">
                <div className=" flex gap-[20px] ">
                    <div className=" relative">
                        <img 
                            src="/marry.png"
                            alt="profile image"
                            className="rounded-full w-[76px] h-[76px]"
                        />
                        <img 
                            src="/camera.svg"
                            alt="camera logo"
                            className="absolute bottom-0 right-0"
                        />
                    </div>
                    <div>
                        <div className="text-[15px] font-medium capitalize">Marry Doe</div>
                        <div className="text-sm capitalize">Marry@Gmail.Com</div>
                    </div>
                </div>
                <div className="mt-[30px] text-sm capitalize">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </div>
                </div>
            </div>
        </>
     );
}
 
export default Profile;