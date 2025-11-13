import React, { useState } from 'react'
import logo from '../../front/assets/imgs/ngologo.jpeg'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'

const Header = () => {
    let [Togelmenu, setTogelmenu] = useState(false)
    let [dropdown, setdropdown] = useState(false)
    let [dropdowntwo, setdropdowntwo] = useState(false)
    let [dropdownNews, setdropdownNews] = useState(false)

    const handleCausesClick = () => {
        setdropdown(!dropdown)
        setdropdowntwo(false)
        setdropdownNews(false)
    }

    const handleEventsClick = () => {
        setdropdowntwo(!dropdowntwo)
        setdropdown(false)
        setdropdownNews(false)
    }
    const handleNewsClick = () => {
        setdropdowntwo(false)
        setdropdown(false)
        setdropdownNews(!dropdownNews)
    }

    const closeAllMenus = () => {
        setdropdown(false)
        setdropdowntwo(false)
        setTogelmenu(false)
        setdropdownNews(false)
    }

    return (
        <>
            <div className='px-5 flex items-center justify-between w-full'>
                <div>
                    <Link to="/">    <img src={logo} className="w-[80px] h-[80px]" alt="" /></Link>
                </div>

                <div className='align-middle hidden md:inline'>
                    <ul className='flex gap-10 align-middle '>
                        <li className='hover:bg-red-500 py-1 rounded px-3 hover:text-white transition duration-300'>
                            <Link to="/" onClick={closeAllMenus}>Home</Link>
                        </li>
                        <li className='hover:bg-red-500 py-1 rounded px-3 hover:text-white transition duration-300'>
                            <Link to="#" className=' relative flex flex-row items-center' onClick={handleCausesClick}>
                                <span> Causes</span>
                                {dropdown ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </Link>
                            {
                                dropdown &&
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute mt-5 py-3 px-3 bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] rounded">
                                    <ul className='text-black'>
                                        <li className='py-2 hover:bg-red-500 rounded px-3 hover:text-white'>
                                            <Link to="/front/causesoption" onClick={closeAllMenus}>Causes</Link>
                                        </li>
                                        <li className='py-2 mt-2 hover:bg-red-500 rounded px-3 hover:text-white'>
                                            <Link to="/front/causesoptiontow" onClick={closeAllMenus}>Causes Details</Link>
                                        </li>
                                    </ul>
                                </motion.div>
                            }
                        </li>
                        <li className='hover:bg-red-500 py-1 rounded px-3 hover:text-white transition duration-300'>
                            <Link to="#" className=' relative flex flex-row items-center' onClick={handleEventsClick}>
                                <span> Events</span>
                                {dropdowntwo ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </Link>
                            {
                                dropdowntwo &&
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute mt-5 py-3 px-3 bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] rounded">
                                    <ul className='text-black'>
                                        <li className='py-2 hover:bg-red-500 rounded px-3 hover:text-white'>
                                            <Link to="/front/events" onClick={closeAllMenus}>Events</Link>
                                        </li>
                                        <li className='py-2 mt-2 hover:bg-red-500 rounded px-3 hover:text-white'>
                                            <Link to="/front/Eventsdetails" onClick={closeAllMenus}>Events Details</Link>
                                        </li>
                                    </ul>
                                </motion.div>
                            }
                        </li>
                        <li className='hover:bg-red-500 py-1 rounded px-3 hover:text-white transition duration-300'>
                            <Link to="/front/gallery" onClick={closeAllMenus}>Gallery</Link>
                        </li>
                        <li className='hover:bg-red-500 py-1 rounded px-3 hover:text-white transition duration-300'>
                            <Link to="#" className=' relative flex flex-row items-center' onClick={handleNewsClick}>
                                <span> News</span>
                                {dropdownNews ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </Link>
                            {
                                dropdownNews &&
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute mt-5 py-3 px-3 bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] rounded">
                                    <ul className='text-black'>
                                        <li className='py-2 hover:bg-red-500 rounded px-3 hover:text-white'>
                                            <Link to="/front/news" onClick={closeAllMenus}>News</Link>
                                        </li>
                                        <li className='py-2 mt-2 hover:bg-red-500 rounded px-3 hover:text-white'>
                                            <Link to="/front/newsdetails" onClick={closeAllMenus}>News Details</Link>
                                        </li>
                                    </ul>
                                </motion.div>
                            }
                        </li>
                        <li className='hover:bg-red-500 py-1 rounded px-3 hover:text-white transition duration-300'>
                            <Link to="/front/contact" onClick={closeAllMenus}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <Link to="/front/login" onClick={closeAllMenus} className='bg-blue-600 rounded-lg py-[8px] px-5 text-sm text-white hover:bg-blue-800 transition duration-400 hidden md:inline '>Login</Link>
                    <Link to="/front/signup" onClick={closeAllMenus} className='bg-red-500 rounded-lg py-[8px] px-5 text-sm text-white hover:bg-red-700 transition duration-400 hidden md:inline '>Sign up</Link>
                    <Link to="/front/profile "><CgProfile size={30} className='' /></Link>

                    <div className="relative">
                        <button className='inline md:hidden text-3xl shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] rounded' onClick={() => { setTogelmenu(!Togelmenu) }}>
                            {Togelmenu ? <RxCross2 /> : <IoMenu />}
                        </button>

                        {Togelmenu &&
                            <motion.div className=' top-15 align-middle absolute shadow bg-white shadow-black w-[150px] -right-10'
                                initial={{ x: 200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            >
                                <ul>
                                    <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white'>
                                        <Link onClick={closeAllMenus} to="/">Home</Link>
                                    </li>
                                    <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white'>
                                        <Link to="#" className=' relative flex flex-row items-center' onClick={handleCausesClick}>
                                            <span> Causes</span>
                                            {dropdown ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                        </Link>
                                        {
                                            dropdown &&
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="relative mt-3">
                                                <ul className='text-black'>
                                                    <li className=' border-y border-gray-300 py-2 hover:bg-red-500 hover:text-white'>
                                                        <Link to="/front/causesoption" onClick={closeAllMenus}>Causes</Link>
                                                    </li>
                                                    <li className=' pt-2 mt-2 hover:bg-red-500 hover:text-white'>
                                                        <Link to="/front/causesoptiontow" onClick={closeAllMenus}>Causes Details</Link>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        }
                                    </li>
                                    <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white'>
                                        <Link to="#" className=' relative flex flex-row items-center' onClick={handleEventsClick}>
                                            <span> Events</span>
                                            {dropdowntwo ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                        </Link>
                                        {
                                            dropdowntwo &&
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="relative mt-3 ">
                                                <ul className='text-black'>
                                                    <li className=' border-y border-gray-300  py-2 hover:bg-red-500 hover:text-white'>
                                                        <Link to="/front/events" onClick={closeAllMenus}>Events</Link>
                                                    </li>
                                                    <li className=' mt-2 hover:bg-red-500 hover:text-white'>
                                                        <Link to="/front/Eventsdetails" onClick={closeAllMenus}>Events Details</Link>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        }
                                    </li>
                                    <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white'>
                                        <Link onClick={closeAllMenus} to="/front/gallery">Gallery</Link>
                                    </li>
                                    <li className='border-b border-gray-300 mt-3 px-3 hover:bg-white'>
                                        <Link to="#" className=' relative flex flex-row items-center' onClick={handleNewsClick}>
                                            <span> News</span>
                                            {dropdownNews ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                        </Link>
                                        {
                                            dropdownNews &&
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="relative mt-3">
                                                <ul className='text-black'>
                                                    <li className='py-2 border-y border-gray-300 hover:bg-red-500  hover:text-white'>
                                                        <Link to="/front/news" onClick={closeAllMenus}>News</Link>
                                                    </li>
                                                    <li className='py-2 hover:bg-red-500 hover:text-white'>
                                                        <Link to="/front/newsdetails" onClick={closeAllMenus}>News Details</Link>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        }
                                    </li>
                                    <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white text-blue-800 font-bold'>
                                        <Link onClick={closeAllMenus} to="/front/login" className='text-sm'>Login</Link>
                                    </li>
                                    <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white text-red-800 font-bold'>
                                        <Link onClick={closeAllMenus} to="/front/signup" className='text-sm'>Sign up</Link>
                                    </li>
                                    {/* <li className='border-b border-gray-300 mt-3 pb-2 px-3 hover:bg-white text-red-800 font-bold'>
                                          <Link to="/front/profile"><CgProfile size={30} /></Link>
                                    </li> */}
                                </ul>
                            </motion.div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
