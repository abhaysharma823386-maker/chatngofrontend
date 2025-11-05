import React, { useState } from 'react'
import aboutimg from '../../front/assets/imgs/about-img.png'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { motion } from "framer-motion";

import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const Login = () => {


  const [data, setdata] = useState([])

  const handleinput = (e) => {
    setdata((abhay) => ({ ...abhay, [e.target.name]: e.target.value }))
  }


  const local = () => {
    const localdata = JSON.parse(localStorage.getItem('user'))
    console.log(localdata)

  }



  return (
    <>
      <div className=" bg-cover bg-center flex md:items-center px-5 py-15 md:p-30  justify-center">
        <div className="overflow-hidden bg-white rounded-2xl md:flex justify-between items-center w-[100%] p-6 shadow-[0_0px_15px_3px_rgba(0,0,0,0.4)]">
          <motion.div
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full hidden md:block md:w-[48%] mb-6 ">
            <img src={aboutimg} className="w-full " alt="About" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" w-full md:w-[48%]">
            <h1 className="text-2xl sm:text-3xl text-center font-sans uppercase font-bold text-blue-500">
              Welcome Back
            </h1>

            <form className="my-5 text-center">
              <input
                type="email"
                name='email'
                onChange={handleinput}
                required placeholder="Enter Your Email"
                className="border py-2 px-4 w-full rounded"
              />
              <input
                type="password"
                required
                name='password'
                onChange={handleinput}
                placeholder="Enter Your Password"
                className="mt-5 border py-2 px-4 w-full rounded"
              />

              <button
                type="submit"
                className="border w-full my-7 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                onClick={local}>
                Login
              </button>

              <Link to="#" className="text-blue-600 hover:underline block mb-4">
                Forgot Password?
              </Link>

              <div className="flex justify-center gap-3">
                <Link
                  to="#"
                  className=" py-2 px-4"
                >
                  <FcGoogle size={30} />
                </Link>
                <Link
                  to="#"
                  className=" py-2 px-4"
                >
                  <FaFacebook size={30} className="text-blue-600" />
                </Link>
                <Link
                  to="#"
                  className=" py-2 px-4"
                >
                  <FaInstagram size={30} className="text-red-600" />
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Login

