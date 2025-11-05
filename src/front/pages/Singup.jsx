import React, { useState } from 'react'
import aboutimg from '../../front/assets/imgs/about-img.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Singup = () => {



  const [data, setdata] = useState({})


  const handleinput = (e) => {
    // setdata(()=>({...data, [e.target.name]:e.target.value}))
    setdata((abhay) => ({ ...abhay, [e.target.name]: e.target.value }))
  }


  const local = () => {
    localStorage.setItem('user', JSON.stringify(data))
  }


  return (
    <>
      <div className='px-5 py-15  md:p-30 ' >
        <div className="bg-white overflow-hidden rounded-2xl md:flex justify-between items-center w-[100%] p-6 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)]" >
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full hidden md:block md:w-[48%] mb-6 ">
            <img src={aboutimg} alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" w-full md:w-[48%]">
            <form action="" className='my-5 text-center'>
              <input required onChange={handleinput} type="text" placeholder='Enter Your Name ' className='border w-full md:w-70 mt-7  py-1 px-4 rounded' />
              <input required onChange={handleinput} type="email" placeholder='Enter Your Email ' className='border w-full md:w-70 mt-7  py-1 px-4 rounded' />
              <input required onChange={handleinput} type="password" placeholder='Enter Your Password ' className=' mt-7 border w-full md:w-70 py-1 px-4 rounded' />
              <input required onChange={handleinput} type="number" placeholder='Enter Your Number ' className=' mt-7 border w-full md:w-70 py-1 px-4 rounded' />
              <br />
              <h1 className='text-start md:ms-12 mt-3'><input required type="checkbox" className='me-3 bg-blue-600' /><span>Remembere me </span></h1>
              <button type='submit' onClick={local} className='border w-full md:w-70 my-3 py-1 px-4 rounded bg-blue-600 text-white'>Sign Up</button>
              <h2>
                Alredy have an account ? <Link className='underline text-blue-600'>log in </Link>
              </h2>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  )
}



export default Singup
