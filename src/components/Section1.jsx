import React from 'react'
import sec1 from '../image/firstsection.png'
import icon2 from '../image/download.png'

const Section1 = () => {
  return (
    <div>
        <div className='position-relative cover section1 d-flex justify-content-center align-items-center'>
            {/* <img src={sec1} className='img_set' alt="" /> */}
            <div >
             <div>
            <h1>Trusted Service </h1>
            </div>
            <div>
              <h1 >Provider For <span>Application Developmet</span> </h1>
            </div>  
            <div><p >Save time to build your business, let us build the softwares and apps for you!</p></div>
            <div className='d-flex justify-content-center'>
             <button className='sec_btn'> <img src={icon2} style={{width:"25px",height:"25px"}} alt="" /> Connect Us</button>
            </div>
           </div>
           

            
        </div>
        {/* <div className=' img_pos_set d-flex justify-content-center align-items-center'>
        </div> */}
    </div>
  )
}

export default Section1