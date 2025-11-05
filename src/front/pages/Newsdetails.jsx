import React from 'react'
import detailsbig from '../../front/assets/imgs/detailsbig.png'
import detailssmall1 from '../../front/assets/imgs/details-small-1.png'
import detailssmall2 from '../../front/assets/imgs/details-small-2.png'
import pdfimg from '../../front/assets/imgs/pdf.png'
import post from '../../front/assets/imgs/post-1.png'
import post1 from '../../front/assets/imgs/post-2.png'
import projectorganizer from '../../front/assets/imgs/project_organizer.png'
import reccas1 from '../../front/assets/imgs/rec-cas-1.png'
import reccas2 from '../../front/assets/imgs/rec-cas-2.png'
import reccas3 from '../../front/assets/imgs/rec-cas-3.png'
import reccas4 from '../../front/assets/imgs/rec-cas-4.png'
import { IoIosArrowRoundForward, IoIosPeople } from 'react-icons/io';
import { motion } from "framer-motion";
import common from '../../front/assets/imgs/common.png'
import { FaLinkedinIn, FaLocationArrow, FaReply, FaXTwitter } from 'react-icons/fa6'
import { MdCategory, MdOutlineDateRange } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

const Newsdetails = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="section-9 py-40 px-10 w-full" style={{ backgroundImage: `url(${common})`, backgroundPosition: `center` }}>
                <h3 className='text-4xl text-white font-bold'>News Details</h3>
                <p className='flex items-center'>
                    <span className='text-white'>Home</span>
                    <span><IoIosArrowRoundForward size={30} className='text-white' /></span>
                    <span className='text-gray-400'>News Details</span>
                </p>
            </motion.div>
            <div className="section-5 px-10 overflow-hidden ">
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
                        <div className=" overflow-hiddenp-5 mt-3">
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className=''>
                                <h2 className='text-3xl py-3'>
                                    Give children a good education and a better life
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
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="mt-5 flex border-y justify-between  border-gray-200">
                                <div className='w-[48%] '>
                                    <img src={detailssmall1} alt="" className='rounded' />
                                </div>
                                <div className='w-[48%]'>
                                    <img src={detailssmall2} alt="" className='rounded' />
                                </div>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='text-gray-400 mt-5'>
                                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className=" mt-5 flex flex-wrap  items-center justify-between bg-[#f4f8fb] p-4  rounded-xl shadow-sm w-full ">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={pdfimg}
                                        alt="PDF"
                                        className="w-20 h-20"
                                    />

                                    <div>
                                        <p className="text-gray-800 font-semibold text-base sm:text-lg">
                                            Children education <br /> manual <span className="text-gray-600">.pdf</span>
                                        </p>
                                    </div>
                                </div>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md mt-3 sm:mt-0 transition">
                                    Download now
                                </button>
                            </motion.div>
                            <motion.h3
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='mt-20 text-2xl'>
                                2 Comments
                            </motion.h3>
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className=' md:flex'>
                                <img src={post} alt="" className='mt-5' />
                                <div className='md:ms-5'>
                                    <div className='flex items-center justify-between mt-5'>
                                        <p className='text-2xl'>James martin</p>
                                        <p className='text-red-600 flex justify-between items-center cursor-pointer ' > <FaReply className='me-3' />Reply</p>
                                    </div>
                                    <p className='mt-5'>
                                        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='mt-20 md:flex'>
                                <img src={post1} alt="" className='mt-5' />
                                <div className="md:ms-5">
                                    <div className='flex items-center justify-between mt-5'>
                                        <p className='text-2xl'>James martin</p>
                                        <p className='text-red-600 flex justify-between items-center cursor-pointer ' > <FaReply className='me-3' />Reply</p>
                                    </div>
                                    <p className='mt-5'>
                                        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h1 className='my-10 font-bold text-2xl'>Leave a comment</h1>
                                <div>
                                    <form>
                                        <div className=" justify-between flex w-full mb-6">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter full name"
                                                className=" w-100% md:w-[48%] p-4 rounded-md bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300"
                                            />
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter email address"
                                                className="w-100% md:w-[48%] p-4 rounded-md bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300"
                                            />
                                        </div>

                                        <textarea
                                            rows="5"
                                            placeholder="Write your comments"
                                            required
                                            className="w-full p-4 rounded-md bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 mb-6"
                                        ></textarea>

                                        <button
                                            type="submit"
                                            className="bg-red-600 text-white font-medium px-8 py-3 rounded-md hover:bg-red-700 transition"
                                        >
                                            Submit comment
                                        </button>
                                    </form>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className=' md:w-[34%] mt-20'>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <div className="w-[100%] flex" >
                                <img src={projectorganizer} alt="" />
                                <div className='ms-5'>
                                    <p>Write by:</p>
                                    <h3 className='text-2xl'>Police Sari</h3>
                                    <p className='text-gray-500'>Manager at ABC company</p>
                                </div>
                            </div>
                            <div className="w-[100%] mt-5">
                                <p className='py-2 flex items-center'><MdCategory className='bg-red-300 rounded-full p-2 text-white me-3' size={35} /><span className='text-gray-500 font-bold'>Category:</span> Education</p>
                                <p className='py-2 flex items-center'><FaLocationArrow className='bg-red-300 rounded-full p-2 text-white me-3' size={35} /><span className='text-gray-500 font-bold'>Location:</span> Niger, Nigeria</p>
                                <p className='py-2 flex items-center'><MdOutlineDateRange className='bg-red-300 rounded-full p-2 text-white me-3' size={35} /><span className='text-gray-500 font-bold'> Date:</span> 20 Dec, 2021</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl mt-5 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <h3 className='font-bold text-2xl mb-5 '>Recent news</h3>
                            <div className=' my-5'>
                                <div className='flex items-center'>
                                    <img src={reccas1} alt="" />
                                    <p className='ms-5'>3rd January, 2022</p>
                                </div>

                                <h3 className='text-xl hover:text-red-700 duration-300'>Stop early marriage and educate your girl child</h3>
                            </div>
                            <div className=' my-5'>
                                <div className='flex items-center'>
                                    <img src={reccas2} alt="" />
                                    <p className='ms-5'>10th January, 2022</p>
                                </div>
                                <h3 className='text-xl hover:text-red-700 duration-300'>Ensure a secure and free life for the wild animal</h3>
                            </div>
                            <div className=' my-5'>
                                <div className='flex items-center'>
                                    <img src={reccas3} alt="" />
                                    <p className='ms-5'>15th January, 2022</p>
                                </div>
                                <h3 className='text-xl hover:text-red-700 duration-300'>Ensure pure and mineral drinking water for rural people</h3>
                            </div>
                            <div className=' my-5'>
                                <div className='flex items-center'>
                                    <img src={reccas4} alt="" />
                                    <p className='ms-5'>30th Dec, 2021</p>
                                </div>
                                <h3 className='text-xl hover:text-red-700 duration-300'>Collect fund for drinking water & healthy food</h3>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl mt-5 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <h3 className='font-bold text-2xl border-b border-gray-400 pb-5'>Popular tags</h3>
                            <ul className='mt-5'>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Poverty</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Education</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Children education</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Food</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Health care</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Welfare</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Donation people</li>
                                <li className='bg-gray-200 inline-flex py-2 px-4 cursor-pointer rounded m-2'>Charity fund</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl mt-5 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)] p-5 justify-between">
                            <h3 className='font-bold text-2xl mb-5 border-b border-gray-400 pb-4'>Share causes</h3>
                            <div className='flex justify-around'>
                                <RiFacebookFill className='bg-red-200 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
                                <BsInstagram className='bg-red-200 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
                                <FaLinkedinIn className='bg-red-200 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
                                <FaXTwitter className='bg-red-200 text-white rounded p-2 hover:-translate-y-2 duration-500 cursor-pointer' size={35} />
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
                        <div className="flex flex-wrap sm:flex-row gap-5 md:gap-2 w-full max-w-md sm:max-w-lg mx-auto rounded-md">
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

export default Newsdetails
