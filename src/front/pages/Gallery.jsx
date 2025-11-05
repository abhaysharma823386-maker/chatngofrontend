import React from 'react'
import eventbig from '../../front/assets/imgs/event-big.png'
import foodCamp from '../../front/assets/imgs/FoodCamp.png'
import { IoIosArrowRoundForward, IoIosPeople, IoLogoInstagram } from 'react-icons/io';
import { IoTimeSharp } from 'react-icons/io5';
import download1 from '../../front/assets/imgs/download1.png'
import common from '../../front/assets/imgs/common.png'
import { motion } from "framer-motion";
import gallerygrid1 from '../../front/assets/imgs/gallery-grid-1.png'
import gallerygrid2 from '../../front/assets/imgs/gallery-grid-2.png'
import gallerygrid3 from '../../front/assets/imgs/gallery-grid-3.png'
import gallerygrid4 from '../../front/assets/imgs/gallery-grid-4.png'
import gallerygrid5 from '../../front/assets/imgs/gallery-grid-5.png'
import gallerygrid6 from '../../front/assets/imgs/gallery-grid-6.png'

const Gallery = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-9 py-40 px-10 w-full" style={{ backgroundImage: `url(${common})`, backgroundPosition: `center` }}>
        <h3 className='text-4xl text-white font-bold'>Gallery</h3>
        <p className='flex items-center'>
          <span className='text-white'>Home</span>
          <span><IoIosArrowRoundForward size={30} className='text-white' /></span>
          <span className='text-gray-400'>Gallery</span>
        </p>
      </motion.div>
      <div className="section-5 px-10 pb-20 pt-20  bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center'>
          <h5 className='text-2xl text-gray-500'>Gallery</h5>
          <h1 className='text-3xl md:text-4xl '>
            Explore our gallery to<br />know how we works
          </h1>
        </motion.div>
        <div className="w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}

            className="flex justify-between mt-10 flex-wrap gap-6">
            {[gallerygrid1, gallerygrid2, gallerygrid3].map((img, i) => (
              <div key={i} className="relative md:w-[30%] overflow-hidden rounded-2xl group">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay + Icon */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <img src={download1} alt="" />
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} s
            className="flex justify-between mt-10 flex-wrap gap-6">
            {[gallerygrid4, gallerygrid5, gallerygrid6].map((img, i) => (
              <div key={i} className="relative md:w-[30%] overflow-hidden rounded-2xl group">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <img src={download1} alt="" />
                </div>
              </div>
            ))}
          </motion.div>
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

export default Gallery
