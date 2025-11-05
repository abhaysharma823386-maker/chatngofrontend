import React, { Children } from 'react'
import { FaFacebook, FaRegCirclePlay } from "react-icons/fa6";
import homebanner from '../../front/assets/imgs/home-banner.png'
import bannerpng from '../../front/assets/imgs/banner.png'
import Childrenbook from '../../front/assets/imgs/Children-book.png'
import childreneducation from '../../front/assets/imgs/children-education.png'
import Cleanmineral from '../../front/assets/imgs/Clean-mineral.png'
import Surgerytreatment from '../../front/assets/imgs/Surgery-treatment.png'
import Childrenfood from '../../front/assets/imgs/children-food.png'
import aboutimg from '../../front/assets/imgs/about-img.png'
import download from '../../front/assets/imgs/download.png'
import eventbig from '../../front/assets/imgs/event-big.png'
// import volunteer from '../../front/assets/imgs/volunteer-1.png'
// import volunteer1 from '../../front/assets/imgs/volunteer-2.png'
// import volunteer2 from '../../front/assets/imgs/volunteer-3.png'
// import volunteer3 from '../../front/assets/imgs/volunteer-4.png'
import welcometojago from '../../front/assets/imgs/welcome-to-jago.png'
import collectfund from '../../front/assets/imgs/collectfund.png'
import collectfund2 from '../../front/assets/imgs/collectfund2.png'
import collectfund3 from '../../front/assets/imgs/collectfund3.png'
import collectfund4 from '../../front/assets/imgs/collectfund4.png'
import collectfund5 from '../../front/assets/imgs/collectfund5.png'
import collectfund6 from '../../front/assets/imgs/collectfund6.png'
import foodCamp from '../../front/assets/imgs/FoodCamp.png'
import jagowelfare from '../../front/assets/imgs/Jagowelfare.png'
import totalcampaign from '../../front/assets/imgs/Total-campaign.png'
import totalcampaign2 from '../../front/assets/imgs/totalcampaign2.png'
import totalcampaign3 from '../../front/assets/imgs/totalcampaign3.png'
import totalcampaign4 from '../../front/assets/imgs/totalcampaign4.png'
import sliderimg1 from '../../front/assets/imgs/sliderimg1.png'
import sliderimg2 from '../../front/assets/imgs/sliderimg2.png'
import sliderimg3 from '../../front/assets/imgs/sliderimg3.png'
import sliderimg4 from '../../front/assets/imgs/sliderimg4.png'
import sliderimg5 from '../../front/assets/imgs/sliderimg5.png'
import sliderimg6 from '../../front/assets/imgs/sliderimg6.png'
import sliderimg7 from '../../front/assets/imgs/sliderimg7.png'
import { IoIosPeople, IoLogoInstagram } from 'react-icons/io';
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
// import { MdPerson2 } from 'react-icons/md';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { IoTimeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="section-1 px-10 py-20" style={{ backgroundImage: `url(${homebanner})` }}>
        <motion.div className='flex flex-col-reverse md:flex-row items-center justify-between'
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='w-full md:w-[50%]'>
            <h1 className='text-3xl md:text-7xl font-black'>
              Share your love to <br /> <span className='font-light'>make someone’s life better</span>
            </h1>
            <p className='pt-10 text-gray-500 text-1xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium ratione quod voluptatem deserunt placeat ipsa alias quidem minima.
            </p>
          </div>
          <div className='w-full md:w-[50%] flex justify-center mb-[50px]'>
            <img src={bannerpng} alt="" className='w-100 h-100%' />
          </div>
        </motion.div>
      </div>
      <div className="overflow-hidden section-2 py-10 pt-30 px-10 w-full">
        <div className=" childers flex flex-wrap w-full justify-around gap-20  md:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className='bg-[#cae4f7] w-100 sm:w-50 md:w-[23%] rounded-2xl p-5 hover:scale-[1.1] hover:duration-500' >
            <img src={Childrenbook} className='mt-[-80px] m-auto shadow-2xl rounded-full' alt="" />
            <div className='bg-[position:right_bottom]' style={{ backgroundImage: `url(${childreneducation})`, backgroundRepeat: `no-repeat`, }}>
              <p className='text-gray-400 mt-5'>Donate for</p>
              <h6 className='text-2xl'>Children education</h6>
              <span className='text-red-600 font-medium'>More details...</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className='bg-[#fdf0dd] w-100 sm:w-50 md:w-[23%] rounded-2xl p-5 hover:scale-[1.1] hover:duration-500' >
            <img src={Cleanmineral} className='mt-[-80px] m-auto shadow-2xl rounded-full' alt="" />
            <div className='bg-[position:right_bottom]' style={{ backgroundImage: `url(${childreneducation})`, backgroundRepeat: `no-repeat`, }}>
              <p className='text-gray-400 mt-5'>Donate for</p>
              <h6 className='text-2xl'>Clean mineral water</h6>
              <span className='text-red-600 font-medium'>More details...</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}


            className='bg-[#d2f4f4] w-100 sm:w-50 md:w-[23%] rounded-2xl p-5 hover:scale-[1.1] hover:duration-500' >
            <img src={Surgerytreatment} className='mt-[-80px] m-auto shadow-2xl rounded-full' alt="" />
            <div className='bg-[position:right_bottom]' style={{ backgroundImage: `url(${childreneducation})`, backgroundRepeat: `no-repeat`, }}>
              <p className='text-gray-400 mt-5'>Donate for</p>
              <h6 className='text-2xl'>Surgery & treatment</h6>
              <span className='text-red-600 font-medium'>More details...</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className='bg-[#e0eafd] w-100 sm:w-50 md:w-[23%] rounded-2xl p-5 hover:scale-[1.1] hover:duration-500' >
            <img src={Childrenfood} className='mt-[-80px] m-auto shadow-2xl rounded-full' alt="" />
            <div className='bg-[position:right_bottom]' style={{ backgroundImage: `url(${childreneducation})`, backgroundRepeat: `no-repeat`, }}>
              <p className='text-gray-400 mt-5'>Donate for</p>
              <h6 className='text-2xl'>Children education</h6>
              <span className='text-red-600 font-medium'>More details...</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" overflow-hidden section-3 py-10 px-10 flex flex-wrap w-full">
        <motion.div
          initial={{ opacity: 0, x: 150, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-[50%]">
          <img src={aboutimg} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}

          className="w-full md:w-[50%]">
          <div className='flex relative md:-left-[54px] items-center mt-[37px]'>
            <img src={welcometojago} className='hidden md:inline-block' alt="" />
            <h3 className='text-2xl text-gray-500'>Welcome to Jago</h3>
          </div>
          <h2 className='text-4xl md:ps-16'>A world where poverty <br /> will not exists</h2>
          <h3 className='text-2xl my-5 text-red-500 md:ps-16'>We are the largest crowdfunding</h3>
          <p className='text-1xl md:ps-16'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas sapiente minima, maiores ?
          </p>
          <p className='text-1xl text-gray-500 py-3 md:ps-16'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas sapiente minima, maiores  consectetur adipisicing elit. Suscipit quas?
          </p>
          <p className='text-1xl  text-gray-500 md:ps-16'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet Suscipit quas sapiente minima, maiores ?
          </p>
          <div className="flex mt-10">
            <button className=' w-[40%] md:w-auto md:ms-16 bg-red-600 md:py-2 md:px-5 text-white rounded-md hover:bg-gray-900 duration-300'>Lorem more</button>
            <h4 className='ms-10 text-2xl flex'><FaRegCirclePlay className='me-4 cursor-pointer' color='red' size={40} />How we work</h4>
          </div>
        </motion.div>
      </div>
      <div className="section-4 px-10 bg-[#eef4f8] mb-[-200px] p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}

          className='text-center'>
          <h5 className='text-2xl text-gray-500'>Trending causes</h5>
          <h1 className='text-3xl md:text-4xl '>
            We are always where <br /> other peopleneed help
          </h1>
        </motion.div>
        <div className='w-full flex flex-wrap justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
              <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
                Food
              </div>
              <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                <span className="text-gray-800 font-semibold">75%</span>
              </div>
            </div>
            <div className="p-5 mt-3">
              <h3 className="text-center  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                Collect fund for drinking water & healthy food
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
              </p>
              <div className="flex border-t border-gray-200">
                <div className="flex items-center mt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Date:</p>
                    <p className='text-gray-600 text-xs'>20 Dec, 2021</p>
                  </span>
                </div>
                <div className="flex items-center mt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <HiOutlineCalendarDateRange size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>By:</p>
                    <p className='text-gray-600 text-xs'>Admin</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund2} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
              <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
                 water
              </div>
              <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                <span className="text-gray-800 font-semibold">75%</span>
              </div>
            </div>
            <div className="p-5 mt-3">
              <h3 className="text-center  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                Collect fund for drinking water & healthy food
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
              </p>
              <div className="flex border-t border-gray-200">
                <div className="flex items-center mt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Date:</p>
                    <p className='text-gray-600 text-xs'>20 Dec, 2021</p>
                  </span>
                </div>
                <div className="flex items-center mt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <HiOutlineCalendarDateRange size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>By:</p>
                    <p className='text-gray-600 text-xs'>Admin</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund3} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
              <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
               C===locks
              </div>
              <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                <span className="text-gray-800 font-semibold">75%</span>
              </div>
            </div>
            <div className="p-5 mt-3">
              <h3 className="text-center  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                Collect fund for drinking water & healthy food
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
              </p>
              <div className="flex border-t border-gray-200">
                <div className="flex items-center mt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Date:</p>
                    <p className='text-gray-600 text-xs'>20 Dec, 2021</p>
                  </span>
                </div>
                <div className="flex items-center mt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <HiOutlineCalendarDateRange size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>By:</p>
                    <p className='text-gray-600 text-xs'>Admin</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="section-5 px-10 pb-20 pt-55 overflow-hidden  bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}

          className='text-center'>
          <h5 className='text-2xl text-gray-500'>Upcoming events</h5>
          <h1 className='text-3xl md:text-4xl '>
            {/* <img src={download} alt="" className='ml-[240px] -mb-[30px] hidden md:inline-block' /> */}
            Join our upcomingevents <br />for contribution
          </h1>
        </motion.div>
        <div className='w-full flex flex-wrap justify-between'>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] h-[700px] md:w-[48%] group overflow-hidden">
            <div className='relative'>
              <img src={eventbig} className='w-full h-80 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5 mt-3">
              <div className='flex'>
                <div className='w-[75%]'>
                  <p className='text-red-600 text-xl font-bold mb-3'>#FoodCamp</p>
                  <h3 className="text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                    Collect fund for drinking water & healthy food
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
                  </p>
                </div>
                <div className=' ps-9 pt-3 w-[25%] text-white ' style={{ backgroundImage: `url(${foodCamp})`, backgroundRepeat: 'no-repeat' }}>
                  <p>20</p>
                  <p>dec</p>
                </div>
              </div>
              <div className="flex border-y border-gray-200">
                <div className="flex items-center pt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Location:</p>
                    <p className='text-gray-600 text-xs'>jaipur.</p>
                  </span>
                </div>
                <div className="flex items-center pt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <IoTimeSharp size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Starts at:</p>
                    <p className='text-gray-600 text-xs'>10 am</p>
                  </span>
                </div>
              </div>
              <button className='bg-red-500 w-full py-3 rounded hover:bg-gray-950 text-white duration-300 mt-5 font-bold'>Join event</button>
            </div>
          </motion.div>
          <div className='md:w-[48%]'>
            <motion.div
              initial={{ opacity: 0, x: 150, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className=" mt-20  bg-white rounded-2xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] w-[98%] md:h-[310px] group overflow-hidden">
              <div className="p-5 mt-3">
                <div className='flex'>
                  <div className='w-[75%]'>
                    <p className='text-red-600 text-xl font-bold mb-3'>#FoodCamp</p>
                    <h3 className="text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                      Collect fund for drinking water & healthy food
                    </h3>
                    <p className="text-gray-500 text-sm mb-5">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
                    </p>
                  </div>
                  <div className=' ps-9 pt-3 w-[25%] text-white ' style={{ backgroundImage: `url(${foodCamp})`, backgroundRepeat: 'no-repeat' }}>
                    <p>20</p>
                    <p>dec</p>
                  </div>
                </div>
                <div className="flex border-y border-gray-200">
                  <div className="flex items-center pt-4 border-r border-gray-200 w-[50%]">
                    <span className='me-2'>
                      <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                    </span>
                    <span className='py-4'>
                      <p>Location:</p>
                      <p className='text-gray-600 text-xs'>jaipur.</p>
                    </span>
                  </div>
                  <div className="flex items-center pt-4 ms-5 w-[50%]">
                    <span className='me-2'>
                      <IoTimeSharp size={40} className='bg-[#fceceb] rounded-full p-2' />
                    </span>
                    <span className='py-4'>
                      <p>Starts at:</p>
                      <p className='text-gray-600 text-xs'>10 am</p>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className=" mt-5  bg-white rounded-2xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] w-[98%] md:h-[310px] group overflow-hidden">
              <div className="p-5 mt-3">
                <div className='flex'>
                  <div className='w-[75%]'>
                    <p className='text-red-600 text-xl font-bold mb-3'>#FoodCamp</p>
                    <h3 className="text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                      Collect fund for drinking water & healthy food
                    </h3>
                    <p className="text-gray-500 text-sm mb-5">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
                    </p>
                  </div>
                  <div className=' ps-9 pt-3 w-[25%] text-white ' style={{ backgroundImage: `url(${foodCamp})`, backgroundRepeat: 'no-repeat' }}>
                    <p>20</p>
                    <p>dec</p>
                  </div>
                </div>
                <div className="flex border-y border-gray-200">
                  <div className="flex items-center pt-4 border-r border-gray-200 w-[50%]">
                    <span className='me-2'>
                      <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                    </span>
                    <span className='py-4'>
                      <p>Location:</p>
                      <p className='text-gray-600 text-xs'>jaipur.</p>
                    </span>
                  </div>
                  <div className="flex items-center pt-4 ms-5 w-[50%]">
                    <span className='me-2'>
                      <IoTimeSharp size={40} className='bg-[#fceceb] rounded-full p-2' />
                    </span>
                    <span className='py-4'>
                      <p>Starts at:</p>
                      <p className='text-gray-600 text-xs'>10 am</p>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className=" mt-5  bg-white rounded-2xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] w-[98%] md:h-[310px] group overflow-hidden">
              <div className="p-5 mt-3">
                <div className='flex'>
                  <div className='w-[75%]'>
                    <p className='text-red-600 text-xl font-bold mb-3'>#FoodCamp</p>
                    <h3 className="text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                      Collect fund for drinking water & healthy food
                    </h3>
                    <p className="text-gray-500 text-sm mb-5">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
                    </p>
                  </div>
                  <div className=' ps-9 pt-3 w-[25%] text-white ' style={{ backgroundImage: `url(${foodCamp})`, backgroundRepeat: 'no-repeat' }}>
                    <p>20</p>
                    <p>dec</p>
                  </div>
                </div>
                <div className="flex border-y border-gray-200">
                  <div className="flex items-center pt-4 border-r border-gray-200 w-[50%]">
                    <span className='me-2'>
                      <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                    </span>
                    <span className='py-4'>
                      <p>Location:</p>
                      <p className='text-gray-600 text-xs'>jaipur.</p>
                    </span>
                  </div>
                  <div className="flex items-center pt-4 ms-5 w-[50%]">
                    <span className='me-2'>
                      <IoTimeSharp size={40} className='bg-[#fceceb] rounded-full p-2' />
                    </span>
                    <span className='py-4'>
                      <p>Starts at:</p>
                      <p className='text-gray-600 text-xs'>10 am</p>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="section-6 bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}

          className="py-30 text-white text-center" style={{ backgroundImage: `url(${jagowelfare})`, backgroundPosition: "center" }}>
          <p className='text-2xl'>We are here to stop poverty</p>
          <h2 className='text-3xl md:text-4xl my-8'>
            We are fundraising for the <br /> people who are fighting <br /> against poverty
          </h2>
          <button className=' bg-red-600 py-3 px-8 text-white rounded-md hover:bg-gray-900 duration-300'>Lorem more</button>
        </motion.div>
        <div className="slider-section px-10 my-20">
          <Swiper
            // slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={sliderimg1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg7} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -150, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}

          className=' my-15 mx-10 rounded-2xl py-10 bg-white justify-between flex flex-wrap px-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] '>
          <div className=' m-auto py-10 md:py-0 md:w-[24%] text-center md:border-r border-gray-200'>
            <img src={totalcampaign} className='m-auto' alt="" />
            <p className='text-3xl my-2   '>2348</p>
            <p className='text-2xl'>Total campaign</p>
          </div>
          <div className=' m-auto py-10 md:py-0 md:w-[24%] text-center md:border-r border-gray-200'>
            <img src={totalcampaign2} className='m-auto' alt="" />
            <p className='text-3xl my-2   '>1748</p>
            <p className='text-2xl'>Satisfied donors</p>
          </div>
          <div className=' m-auto py-10 md:py-0 md:w-[24%] text-center md:border-r border-gray-200'>
            <img src={totalcampaign3} className='m-auto' alt="" />
            <p className='text-3xl my-2   '>4287</p>
            <p className='text-2xl'>Fund raised</p>
          </div>
          <div className=' m-auto py-10 md:py-0 md:w-[24%] text-center'>
            <img src={totalcampaign4} className='m-auto' alt="" />
            <p className='text-3xl my-2   '>1294</p>
            <p className='text-2xl'>Happy volunteers</p>
          </div>
        </motion.div>
      </div>
      <div className="section-7 px-10 bg-[#eef4f8] mb-[-200px] p-10">
        <div className='text-center'>
          <h5 className='text-2xl text-gray-500'>Our latest news</h5>
          <h1 className='text-3xl md:text-4xl '>
            Check allour latest news <br /> and updates
          </h1>
        </div>
        <div className='w-full overflow-hidden flex flex-wrap justify-between'>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund4} className='w-full h-80  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Help</p>
              <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                Healthy food and nutrition among all the children
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
              </p>
              <div className="flex border-t border-gray-200">
                <div className="flex items-center mt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Date:</p>
                    <p className='text-gray-600 text-xs'>20 Dec, 2021</p>
                  </span>
                </div>
                <div className="flex items-center mt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <HiOutlineCalendarDateRange size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>By:</p>
                    <p className='text-gray-600 text-xs'>Admin</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund5} className='w-full h-80 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Help</p>
              <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                New era for children learning and remove discrimination
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
              </p>
              <div className="flex border-t border-gray-200">
                <div className="flex items-center mt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Date:</p>
                    <p className='text-gray-600 text-xs'>20 Dec, 2021</p>
                  </span>
                </div>
                <div className="flex items-center mt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <HiOutlineCalendarDateRange size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>By:</p>
                    <p className='text-gray-600 text-xs'>Admin</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund6} className='w-full h-80 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Help</p>
              <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                Ensure pure and mineral drinking water for rural people
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.
              </p>
              <div className="flex border-t border-gray-200">
                <div className="flex items-center mt-4 border-r border-gray-200 w-[50%]">
                  <span className='me-2'>
                    <IoIosPeople size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>Date:</p>
                    <p className='text-gray-600 text-xs'>20 Dec, 2021</p>
                  </span>
                </div>
                <div className="flex items-center mt-4 ms-5 w-[50%]">
                  <span className='me-2'>
                    <HiOutlineCalendarDateRange size={40} className='bg-[#fceceb] rounded-full p-2' />
                  </span>
                  <span className='py-4'>
                    <p>By:</p>
                    <p className='text-gray-600 text-xs'>Admin</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="section-8 pt-50 pb-10 bg-white">
        <div className=' items-center my-15 mx-10 rounded-2xl py-10 bg-white justify-between flex flex-wrap px-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] '>
          <div className='w-full md:w-[40%]'>
            <p className='text-gray-400'>Newsletter</p>
            <h1 className='text-3xl'>To get weekly & monthly news,Subscribe to our newsletter.</h1>
          </div>
          <div className='w-full md:w-[50%]'>
            <div class="flex flex-wrap sm:flex-row gap-2 w-full max-w-md sm:max-w-lg mx-auto rounded-md">
              <input
                type="email"
                placeholder="Email Address"
                class="flex-1 px-4 py-2 focus:outline-none border border-gray-300 rounded-md"
              />
              <button
                class="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition w-full sm:w-auto rounded-md"
              >
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
