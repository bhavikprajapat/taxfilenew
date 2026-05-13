import React from 'react'
import img from '../image/whoweareMain.png'

function Whoweare() {
    return (
        <div className='container1 py-5 main_who_we_are'>
            <div className='row '>
                <div className='col-lg-12 col-xl-6 col-md-12 col-12  d-flex align-items-center justify-content-center p-0'>
                    <img src={img} alt="" className='img_size_set' />
                    <div className='round_set d-flex justify-content-center align-items-center'>
                        <div>
                        <div className='text-center'>
                        <h2 className='p-0 m-0'>30</h2>
                        </div>
                        <div >
                        <p className='p-0 m-0 text-center'>YEARS EXPRIENCE</p>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
                
                <div className='col-lg-12 col-md-12 mt-5 col-xl-6'>
                    <h2 className='text-center'>WHO WE ARE</h2>
                    <div className=''>
                        <p>Every Chartered Accountant and Tax Professional deserves software that simplifies complexity, not adds to it. Our journey began in 1995 with a simple, yet ambitious, mission: to transform the daunting process of Indian taxation into a streamlined, error-free experience.</p>

                        <p>For over three decades, Taxfile Invosoft Pvt Ltd. has been on the cutting edge of tax technology, evolving with every budget and every legislative change. We didn't just build tax software; we created the I-TAX platform a comprehensive, robust ecosystem built on a foundation of reliability and deep domain expertise.</p>

                        <p>
                            We are proud to be the trusted partner to thousands of professionals across India, helping them achieve compliance, efficiency, and confidence in their practice every day.
                        </p>
                    </div>
                    <button className='btn_Set2'>Contact us</button>
                </div>
            </div>
            <div className='row py-5 h-100'>
             <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-2 '>
            <div className='card main_who_we_are_padding d-flex justify-content-center align-items-center'>
                <h3 className='count-number'><span>99</span><span>+</span></h3>
                <p style={{textAlign:"center"}}>Success Rate</p>
            </div>
           </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-2 '>
            <div className='card main_who_we_are_padding d-flex  justify-content-center align-items-center'>
                <h3 className='count-number'><span>50,000</span><span>+</span></h3>
                <p style={{textAlign:"center"}}>Happy Client</p>
            </div>
           </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-2'>
            <div className='card main_who_we_are_padding d-flex justify-content-center align-items-center'>
                <h3 className='count-number' style={{textAlign:"center"}}><span>15</span><span>+</span></h3>
                <p style={{textAlign:"center"}}>Skilled Developers</p>
            </div>
           </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-2'>
            <div className='card main_who_we_are_padding d-flex justify-content-center align-items-center'>
                <h3 className='count-number'><span>30</span><span>+</span></h3>
                <p style={{textAlign:"center"}}>Years of Experience</p>
            </div>
           </div>
            </div>
          
        </div>
    )
}

export default Whoweare