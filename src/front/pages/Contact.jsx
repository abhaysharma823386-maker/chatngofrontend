import React from 'react'
import homebanner from '../../front/assets/imgs/home-banner.png'
import { motion } from "framer-motion";
import banner from '../../front/assets/imgs/banner.png'
import { MdLocationOn } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { IoMdMailOpen } from 'react-icons/io';

const Contact = () => {
    return (
        <>
            <div className="contact-us" style={{ backgroundImage: `url(${homebanner})` }}>
                <div className="overflow-hidden w-100% px-10 pt-10">
                    <div className=" pb-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className='mb-10 text-center'>
                            <h3 className='text-3xl font-bold mb-3'>Contact Us</h3>
                            <p className='text-xl'>We'd Love to hear from . Get touch today</p>
                        </motion.div>
                        <div className='flex justify-between items-center w-full'>
                            <motion.div
                                initial={{ opacity: 0, x: -150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='w-full md:w-[45%]'>
                                <img src={banner} className='w-[90%]' alt="" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 150, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='w-full md:w-[48%]'>
                                <form action="" className="bg-light p-5 mb-5 rounded-4">
                                    <div className='flex justify-between'>
                                        <input
                                            type="text"
                                            className=" rounded border border-gray-500 w-[48%] my-2 px-4 py-2 text-gray-500"
                                            placeholder="Name"
                                        />
                                        <input
                                            type="email"
                                            className=" rounded border border-gray-500 w-[48%] my-2 px-4 py-2 text-gray-500"
                                            placeholder=" Email"
                                        />
                                    </div>
                                    <textarea
                                        name="text"
                                        placeholder="Message"
                                        className="rounded border border-gray-500 w-[100%] my-2 px-4 py-2 text-gray-500"
                                        id=""
                                        rows={5}
                                        defaultValue={""}
                                    />
                                    <input
                                        type="submit"
                                        defaultValue="Send Message"
                                        className=" rounded  w-[100%]  py-2  border hover:bg-blue-700  bg-blue-600 text-white"
                                    />
                                </form>
                                <div>
                                    <p className='flex items-center my-4 text-gray-500'>
                                        <MdLocationOn className='me-4 text-gray-500' />
                                        148,Laxman Colony, New Sanganer Rood Shyam Nagar ,<br /> Sodala , Jaipur .
                                    </p>
                                    <p className='flex items-center my-4 text-gray-500'>
                                        <IoCallOutline className='me-4 text-gray-500' />
                                        +91 (9079) 001762
                                    </p>
                                    <p className='flex items-center my-4 text-gray-500 '>
                                        <IoMdMailOpen className='me-4 text-gray-500' />
                                        pixelgenixitsolutions@gmail.com
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className='w-full mt-15'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d113833.05716904638!2d75.63140023870288!3d26.926240242318368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s148%2CLaxman%20Colony%2C%20New%20Sanganer%20Rood%20Shyam%20Nagar%20%2C%20Sodala%20%2C%20Jaipur%20.!5e0!3m2!1sen!2sin!4v1760525809866!5m2!1sen!2sin"
                                width={'100%'}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
