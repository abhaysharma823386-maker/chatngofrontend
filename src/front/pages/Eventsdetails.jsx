import React from 'react'
import detailsbig from '../../front/assets/imgs/detailsbig.png'
import detailssmall1 from '../../front/assets/imgs/details-small-1.png'
import detailssmall2 from '../../front/assets/imgs/details-small-2.png'
import recdonet1 from '../../front/assets/imgs/rec-donet-1.png'
import recdonet2 from '../../front/assets/imgs/rec-donet-2.png'
import recdonet3 from '../../front/assets/imgs/rec-donet-3.png'
import { IoIosArrowRoundForward, IoIosPeople } from 'react-icons/io';
import common from '../../front/assets/imgs/common.png'
import { FaLinkedinIn, FaLocationArrow, FaReply, FaXTwitter } from 'react-icons/fa6'
import { RiFacebookFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { motion } from "framer-motion";

const Eventsdetails = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="section-9 py-40 px-10 w-full" style={{ backgroundImage: `url(${common})`, backgroundPosition: `center` }}>
                <h3 className='text-4xl text-white font-bold'>Event details</h3>
                <p className='flex items-center'>
                    <span className='text-white'>Event</span>
                    <span><IoIosArrowRoundForward size={30} className='text-white' /></span>
                    <span className='text-gray-400'>Event details</span>
                </p>
            </motion.div>
            <div className=" overflow-hidden section-5 px-10 bg-white">
                <div className='w-full flex flex-wrap justify-between items-start'>
                    <div className=" mt-20  bg-white  md:w-[62%] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: -150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className='overflow-hidden rounded-2xl relative'>
                            <img src={detailsbig} className='w-full  object-cover transition-transform duration-300 hover:scale-110' alt="" />
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium">
                                Food & water
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="p-5 mt-3">
                            <div className=''>
                                <h2 className='text-3xl py-3'>
                                    Healthy food and nutritions awreness campaign december
                                </h2>
                                <p className='text-gray-500 py-3'>
                                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority.
                                </p>
                                <p className='text-gray-500 py-3'>
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.
                                </p>
                                <h4 className='text-2xl'>
                                    We want to ensure the education for the kids.
                                </h4>
                                <p className='text-gray-500 py-3'>
                                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable.
                                </p>
                                <ul className='list-disc ms-4 text-gray-500 marker:text-red-500'>
                                    <li>
                                        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
                                    </li>
                                    <li>
                                        There are many variations of passages of Lorem Ipsum.
                                    </li>
                                    <li>
                                        Available but the majority have alteration in some injected or words.
                                    </li>
                                    <li>
                                        There are many variations of passages of Lorem Ipsum which don't look even slightly believable.
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-5 flex border-y justify-between  border-gray-200">
                                <div className='w-[48%] '>
                                    <img src={detailssmall1} alt="" className='rounded' />
                                </div>
                                <div className='w-[48%]'>
                                    <img src={detailssmall2} alt="" className='rounded' />
                                </div>
                            </div>
                            <p className='text-gray-400 mt-5'>
                                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable.
                            </p>
                        </motion.div>
                    </div>
                    <div className='md:w-[34%] mt-20'>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl flex shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <div>
                                <h3 className='text-2xl'>Event details</h3>
                                <p className='text-black my-2 text-md '> <span className='text-gray-500'>Category:</span> Food and nutrition</p>
                                <p className='text-black my-2 text-md '> <span className='text-gray-500'>Location:</span> 990 Green Hill Bronx, NY 10458.</p>
                                <p className='text-black my-2 text-md '><span className='text-gray-500'>Date:</span> 20 Dec, 2021</p>
                                <p className='text-black my-2 text-md '><span className='text-gray-500'> Mail:</span>registermail@domain.com</p>
                                <p className='text-black my-2 text-md '><span className='text-gray-500'>Phone:</span>  +880 123 456 789</p>
                                <button className='w-full bg-red-700 hover:bg-blue-950 duration-300  text-white rounded py-2 mt-5 text-xl '>Register now</button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl mt-5 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <h3 className='text-3xl mb-3'>Event organizer</h3>
                            <img src={recdonet1} alt="" />
                            <div className='mt-4 justify-between items-center'>
                                <h3 className='text-xl'>Mike richard</h3>
                                <p className='text-gray-500'>Managing director</p>
                                <p>Care NGO ltd.</p>
                            </div>

                            <img src={recdonet2} alt="" />
                            <div className='mt-4 justify-between items-center'>
                                <h3 className='text-xl'>Jenifar lawrence</h3>
                                <p className='text-gray-500'>Entrepreneur</p>
                                <p>Entrepreneur.</p>
                            </div>

                            <img src={recdonet3} alt="" />
                            <div className='mt-4 justify-between items-center'>
                                <h3 className='text-xl'>David jovan</h3>
                                <p className='text-gray-500'>Manager</p>
                                <p>ABC Company</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl mt-5 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <h3 className='text-3xl mb-5 border-b border-gray-400 pb-4'>Share causes</h3>
                            <div className='flex justify-around'>
                                <RiFacebookFill className='bg-red-600 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
                                <BsInstagram className='bg-red-600 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
                                <FaLinkedinIn className='bg-red-600 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
                                <FaXTwitter className='bg-red-600 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
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

export default Eventsdetails
