import React from "react";
import Logo from "../assets/logo.png";
import Notificationsvg from "../assets/Notification.svg";
import Walletsvg from "../assets/wallet.svg";
import Inquirysvg from "../assets/inquiry.svg";
import Settingsvg from "../assets/settings.svg";
import UserImage from "../assets/user.png";
import Arrows from "../assets/arrow.svg";
function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#FFFFFF] py-4 px-10 shaow-lg">
      <div className="flex items-center space-x-8">
        <img src={Logo} alt="logo image" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-[35.3rem] p-2 pl-10 rounded bg-[#F0F2F5] focus:outline-none"
        />
        <svg
          className="absolute left-[6.5rem] mt-[0.15rem] "
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8533 15.5L10.1866 10.8333M11.7422 6.94444C11.7422 9.95133 9.3046 12.3889 6.29772 12.3889C3.29083 12.3889 0.853271 9.95133 0.853271 6.94444C0.853271 3.93756 3.29083 1.5 6.29772 1.5C9.3046 1.5 11.7422 3.93756 11.7422 6.94444Z"
            stroke="#475367"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="flex items-center justify-center space-x-8">
        {/* please note i coup have used an array and map through to maintain the DRY principle but i decided to use this since i dont really know real life case study which might be clickable  */}
        <div className="flex flex-col items-center justify-center mt-[-0.1rem]">
          <img src={Notificationsvg} alt="Notificationsvg" />
          <h6 className="font-satoshi text-[0.75rem] ">Notifications</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Walletsvg} alt="Notificationsvg" />
          <h6 className="font-satoshi text-[0.75rem] ">Wallet</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Inquirysvg} alt="Notificationsvg" />
          <h6 className="font-satoshi text-[0.75rem] ">Inquiries</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Settingsvg} alt="Notificationsvg" />
          <h6 className="font-satoshi text-[0.75rem] text-[#0D6EFD] ">
            Settings
          </h6>
        </div>
        <div className="flex items-center space-x-2">
          <img src={UserImage} alt="userimage" />
          <img src={Arrows} alt="userimage" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
