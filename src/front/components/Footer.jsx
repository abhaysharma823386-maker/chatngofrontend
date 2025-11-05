import React, { useState, useEffect } from "react";
import { FaArrowUp, FaInstagram, FaTwitter, FaXTwitter } from "react-icons/fa6";
import logo from '../../front/assets/imgs/ngologo.jpeg'
import { Link } from "react-router-dom";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { IoLogoYoutube, IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 800;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const smoothScroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(smoothScroll);
      }
    };

    requestAnimationFrame(smoothScroll);
  };


  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center gap-2"
        >
          <FaArrowUp /> Top
        </button>
      )}


      {/* <footer className="flex justify-between">
        <div>
           <img src={logo} className="w-[150px] h-[150px]" alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-3">Links</h2>
          <ul>
            <li><Link to="#" className="text-xl">Causes</Link></li>
            <li><Link to="#" className="text-xl">Events</Link></li>
            <li><Link to="#" className="text-xl">Gallery</Link></li>
            <li><Link to="#" className="text-xl">Contact</Link></li>
          </ul>
        </div>
        <div>

        </div>
        <div></div>
        <div></div>
      </footer> */}
      <footer className="bg-[#eef4f8] text-black py-10 px-6 md:px-20">
        <div className="md:flex justify-between  md:text-start">
          <div className="w-full my-10 md:w-[10%]">
            <img src={logo} className="w-[200px] md:w-[100px] md:h-[100px] m-auto" alt="" />
          </div>
          <div className="w-full my-10 md:w-[25%]">
            <h2 className="text-xl font-semibold mb-3">Helping Hands NGO</h2>
            <p className="text-gray-600">
              Working towards a better tomorrow — empowering communities, educating children,
              and preserving nature.
            </p>
          </div>
          <div className="w-full my-10 md:w-[20%]">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#Causes" className="hover:text-blue-600 transition">Causes</a></li>
              <li><a href="#Events" className="hover:text-blue-600 transition">Events</a></li>
              <li><a href="#Gallery" className="hover:text-blue-600 transition">Gallery</a></li>
              <li><a href="#Contact" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>
          <div className="w-full my-10 md:w-[30%]">
            <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
            <p className="flex gap-3 mb-2">
              <IoLocationOutline size={30} /> P.no 148, Laxman Colony, New Sanganer Road, Sodala, Jaipur - 302019
            </p>
            <p className="flex gap-3 mb-2">
              <IoCallOutline /> +91 98765 43210
            </p>
            <p className="flex gap-3 mb-4">
              <IoMdMail />chat8ngo@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-6 text-2xl m-auto">
          <a href="#" className=" text-red-500"><FaInstagram /></a>
          <a href="#" className=" text-blue-600"><FaFacebookSquare /></a>
          <a href="#" className=""><FaXTwitter /></a>
          <a href="#" className=" text-red-500"><IoLogoYoutube /></a>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          © 2025 Helping Hands NGO. All Rights Reserved.
        </div>
      </footer>

    </>
  );
};

export default Footer;
