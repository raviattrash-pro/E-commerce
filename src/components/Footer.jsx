import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter, WhatsApp, YouTube } from "@material-ui/icons";
import React from "react";
const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">About Us </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat
          repellendus dignissimos iure itaque architecto pariatur quia a eveniet
          veniam?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <Pinterest/>
          </div>
          <div className={socialStyle + ` bg-green-700`}>
            <WhatsApp/>
          </div>
          <div className={socialStyle + ` bg-red-800`}>
            <YouTube/>
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
            <LocationOnOutlined className="text-[#8a4af3]"/>
            <p className='pl-3'>State of India</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneOutlined className="text-[#521da8]"/>
            <p className='pl-3'>+92 620032XXXX</p>
        </div>
        <div className="flex m-3">
            <EmailOutlined className="text-[#8a4af3]"/>
            <p className='pl-3'>raviattrash2@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;