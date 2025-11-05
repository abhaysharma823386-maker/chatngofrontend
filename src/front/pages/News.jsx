import React from 'react'

import collectfund4 from '../../front/assets/imgs/collectfund4.png'
import collectfund5 from '../../front/assets/imgs/collectfund5.png'
import collectfund6 from '../../front/assets/imgs/collectfund6.png'
import { IoIosPeople, IoLogoInstagram } from 'react-icons/io';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { IoIosArrowRoundForward } from 'react-icons/io';
import common from '../../front/assets/imgs/common.png'
import { motion } from "framer-motion";

const News = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-9 py-40 px-10 w-full" style={{ backgroundImage: `url(${common})`, backgroundPosition: `center` }}>
        <h3 className='text-4xl text-white font-bold'>News</h3>
        <p className='flex items-center'>
          <span className='text-white'>Home</span>
          <span><IoIosArrowRoundForward size={30} className='text-white' /></span>
          <span className='text-gray-400'>News</span>
        </p>
      </motion.div>
      <div className="section-7 px-10 bg-[#eef4f8] overflow-hidden  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center pt-10'>
          <h5 className='text-2xl text-gray-500'>Our latest news</h5>
          <h1 className='text-3xl md:text-4xl '>
            {/* <img src={download} alt="" className='ml-[285px] -mb-[30px] hidden md:inline-block' /> */}
            Read and explore your <br /> knowledge through our news
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
              <img src={collectfund4} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Nutrition</p>
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
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund5} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Nutrition</p>
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
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund6} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Nutrition</p>
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
        <div className='w-full pb-5 flex flex-wrap justify-between'>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
            <div className='relative'>
              <img src={collectfund4} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Nutrition</p>
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
              <img src={collectfund5} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Nutrition</p>
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
              <img src={collectfund6} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
            </div>
            <div className="p-5">
              <p className='text-red-500 mb-2'>#Nutrition</p>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-8 py-10 bg-white">
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
      </motion.div>
    </>
  )
}

export default News
