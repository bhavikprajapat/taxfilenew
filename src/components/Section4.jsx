import React from 'react'
import Marquee from "react-fast-marquee";


function MarqueeComponent() {
  return (
    <div className='d-flex sec_4_gap' >
      <div className='techcard d-flex justify-content-center align-items-center sec_4_mar_line'>
        <img src={require('../image/logomarquee/1762931555288_DotNet.png')} className='w-100 ' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1762931565305_NodeJS.png')} className='w-100' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1762931575214_React.png')} className='w-100' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1762931590795_MySQL.png')} className='w-100' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1762931609043_Layer_2_1_.png')} className='w-75' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1762931650159_Flutter.png')} className='w-100' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1766577210354_images__1_-removebg-preview.png')} className='w-100' alt="" />
      </div>
    </div>
  )
}

function MarqueeComponent2() {
  return (
    <div className='d-flex sec_4_gap mt-3' >
      <div className='techcard d-flex justify-content-center align-items-center sec_4_mar_line'>
        <img src={require('../image/logomarquee/1762931672348_Group 9826.png')} className='w-75' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center '>
        <img src={require('../image/logomarquee/1762931720528_Figma.png')} className='w-75' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center '>
        <img src={require('../image/logomarquee/1762931752009_HTML_CSS.png')} className='w-75' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center '>
        <img src={require('../image/logomarquee/1762931764882_J_Script (1).png')} className='w-75' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center '>
        <img src={require('../image/logomarquee/1762931899294_Docker.png')} className='w-100' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center '>
        <img src={require('../image/logomarquee/1762931911204_Android.png')} className='w-100' alt="" />
      </div>
      <div className='techcard d-flex justify-content-center align-items-center'>
        <img src={require('../image/logomarquee/1763377078501_1_FVtCyRdJ6KOr4YswTtwMeA-1024x586-removebg-preview.png')} className='w-100' alt="" />
      </div>
    </div>
  )
}

function Section4() {
  return (
    <div className="sec_4_bg mb-3 pt-3">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6">
            <h6 className='Sec_4_font'>OUR TECHNOLOGIES</h6>
            <h1 className='Sec_4_font'>
              Tools & Technologies Behind <br />
              <span style={{ color: "#6cfffe" }} >Our Software Solutions</span>
            </h1>
          </div>
          <div className="col-lg-6 col-12 jusity-content-center">
            <div className='sec_4_mar'>
              <Marquee className="marquee " speed={50} gradient={false}>
                <MarqueeComponent />
              </Marquee>
            </div>
            <div className='sec_4_mar1'>
              <Marquee direction="right" className="marquee1" speed={50} gradient={false}>
                <MarqueeComponent2 />
              </Marquee>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4