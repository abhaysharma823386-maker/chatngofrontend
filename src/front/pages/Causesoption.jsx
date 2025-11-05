import React from 'react'
import collectfund from '../../front/assets/imgs/collectfund.png'
import collectfund2 from '../../front/assets/imgs/collectfund2.png'
import collectfund3 from '../../front/assets/imgs/collectfund3.png'
// import { IoIosArrowRoundForward, IoIosPeople } from 'react-icons/io';
import collectfund7 from '../../front/assets/imgs/collectfund7.png'
import collectfund8 from '../../front/assets/imgs/collectfund8.png'
import collectfund9 from '../../front/assets/imgs/collectfund9.png'
import { IoIosArrowRoundForward, IoIosPeople } from 'react-icons/io';
import common from '../../front/assets/imgs/common.png'
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { motion } from "framer-motion";


const Causesoption = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="section-9 py-40 px-10 w-full" style={{ backgroundImage: `url(${common})`, backgroundPosition: `center` }}>
                <h3 className='text-4xl text-white font-bold'>Causes</h3>
                <p className='flex items-center'>
                    <span className='text-white'>Home</span>
                    <span><IoIosArrowRoundForward size={30} className='text-white' /></span>
                    <span className='text-gray-400'>Causes</span>
                </p>
            </motion.div>
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
                                Food & water
                            </div>
                            <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                                <span className="text-gray-800 font-semibold">75%</span>
                            </div>
                        </div>
                        <div className="p-5 mt-3">
                            <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
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
                                Food & water
                            </div>
                            <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                                <span className="text-gray-800 font-semibold">75%</span>
                            </div>
                        </div>
                        <div className="p-5 mt-3">
                            <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                                Give children a good education & better life
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
                                Food & water
                            </div>
                            <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                                <span className="text-gray-800 font-semibold">75%</span>
                            </div>
                        </div>
                        <div className="p-5 mt-3">
                            <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
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
                <div className='overflow-hidden w-full flex flex-wrap justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: 150, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
                        <div className='relative'>
                            <img src={collectfund7} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
                                Food & water
                            </div>
                            <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                                <span className="text-gray-800 font-semibold">75%</span>
                            </div>
                        </div>
                        <div className="p-5 mt-3">
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
                    <motion.div
                        initial={{ opacity: 0, x: 150, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className=" mt-20  bg-white rounded-2xl shadow-lg md:w-[31.333%] group overflow-hidden">
                        <div className='relative'>
                            <img src={collectfund8} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
                                Food & water
                            </div>
                            <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                                <span className="text-gray-800 font-semibold">75%</span>
                            </div>
                        </div>
                        <div className="p-5 mt-3">
                            <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                                Ensure a secure and free life for the wild animal
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
                            <img src={collectfund9} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
                                Food & water
                            </div>
                            <div className="absolute rounded-md -bottom-4 left-5 right-5 bg-white shadow bg-opacity-90 px-4 py-2 flex justify-between text-sm font-medium">
                                <span>Goal: <span className="text-gray-700">$10,000</span></span>
                                <span className="text-gray-800 font-semibold">75%</span>
                            </div>
                        </div>
                        <div className="p-5 mt-3">
                            <h3 className="  text-2xl hover:text-red-600 duration-200 font-semibold text-gray-900 mb-2">
                                Stop early marriage and educate your girl child
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
                className=" section-8 py-50 bg-white">
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

export default Causesoption
