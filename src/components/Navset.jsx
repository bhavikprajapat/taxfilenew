import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiRectangleStack } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";

const Navset = () => {
  return (
    <div className="nav_bg_set ">
      <div className="container py-1">
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center ">


          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center">
              <IoMdMail />
              <span className="ms-2 p_set">hr@i-tax.in</span>
            </div>

            <div className="d-flex align-items-center">
              <FaLocationDot />
              <span className="ms-2 p_set">Surat, India</span>
            </div>
          </div>


          <div className="d-flex align-items-center gap-3">

            <div className="d-lg-flex d-none align-items-center h-100">


              <div className="d-flex align-items-center h-100 px-3">
                <HiRectangleStack />
                <span className="ms-2">We're Hiring</span>
              </div>


              <ul className=" d-flex gap-3 align-items-center justify-content-center h-100  mb-0 p-0">
                <li className="px-3 d-flex align-items-center border-start border-end py-2">
                  <a href=""><FaFacebookF /></a>
                </li>

                <li className=" px-3 d-flex align-items-center h-100 border-start border-end  py-2">
                  <a href=""><FaInstagram /></a>
                </li>

                <li className=" px-3 d-flex align-items-center h-100  border-start border-end  py-2">
                  <a href=""><FaXTwitter /></a>
                </li>

                <li className=" px-3 d-flex align-items-center h-100  border-start border-end  py-2">
                  <a href=""><FaLinkedinIn /></a>
                </li>

                <li className=" px-3 d-flex align-items-center  border-start border-end  h-100 py-2">
                  <a href=""><FaYoutube /></a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Navset