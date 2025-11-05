import React, { Children } from 'react'
import eventbig from '../../front/assets/imgs/event-big.png'
import foodCamp from '../../front/assets/imgs/FoodCamp.png'
import { IoIosArrowRoundForward, IoIosPeople, IoLogoInstagram } from 'react-icons/io';
import { IoTimeSharp } from 'react-icons/io5';
import common from '../../front/assets/imgs/common.png'
import { motion } from "framer-motion";


const Events = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-9 py-40 px-10 w-full" style={{ backgroundImage: `url(${common})`, backgroundPosition: `center` }}>
        <h3 className='text-4xl text-white font-bold'>Events</h3>
        <p className='flex items-center'>
          <span className='text-white'>Home</span>
          <span><IoIosArrowRoundForward size={30} className='text-white' /></span>
          <span className='text-gray-400'>Events</span>
        </p>
      </motion.div>
      <div className="section-5 px-10 pb-20 pt-20  bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center'>
          <h5 className='text-2xl text-gray-500'>Upcoming events</h5>
          <h1 className='text-3xl md:text-4xl '>
            Join our upcomingevents <br />for contribution
          </h1>
        </motion.div>
        <div className='w-full flex flex-wrap justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} className=" mt-20  bg-white rounded-2xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] h-[700px] md:w-[48%] group overflow-hidden">
            <div className='relative'>
              <img src={eventbig} className='w-full  object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110' alt="" />
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
                    <p className='text-gray-600 text-xs'>Montgomery, Alabama.</p>
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
              initial={{ opacity: 0, x: -150, scale: 0.8 }}
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
                      <p className='text-gray-600 text-xs'>Montgomery, Alabama.</p>
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
              initial={{ opacity: 0, x: -150, scale: 0.8 }}
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
                      <p className='text-gray-600 text-xs'>Montgomery, Alabama.</p>
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
              initial={{ opacity: 0, x: -150, scale: 0.8 }}
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
                      <p className='text-gray-600 text-xs'>Montgomery, Alabama.</p>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-8 pb-10 bg-white">
        <div className=' items-center my-15 mx-10 rounded-2xl py-10 bg-white justify-between flex flex-wrap px-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] '>
          <div className='w-full md:w-[40%]'>
            <p className='text-gray-400'>Newsletter</p>
            <h1 className='text-3xl'>To get weekly & monthly news,Subscribe to our newsletter.</h1>
          </div>
          <div className='w-full md:w-[50%]'>
            <div className="flex flex-wrap sm:flex-row gap-2 w-full max-w-md sm:max-w-lg mx-auto rounded-md">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 focus:outline-none border border-gray-300 rounded-md"
              />
              <button
                className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition w-full sm:w-auto rounded-md"
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

export default Events
