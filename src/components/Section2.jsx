import React from 'react'
import one from '../image/web development.png'
import two from '../image/softwer.png'
import three from '../image/app developmnt.png'
import four from '../image/graphics.png'
import five from '../image/uiux.png'

function Section2() {
    return (
        <div className='about-main-section-start pb-5'>
            <div className='container pb-5'>
                <div className='text-center py-5 sec_2_text'>
                    <h2>OUR TEAM</h2>
                    <h1>Meet Our Dedicated Professionals</h1>
                    <p>At TAXFILE INVOSOFT PVT LTD, our strength comes from a skilled team <br />driven by innovation, expertise, and a passion for excellence.</p>
                </div>
                <div>
                    <div className='d-lg-flex d-md-flex d-sm-flex flex-wrap gap_set1 '>
                        <div className="sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
                            <div className="card-body d-flex justify-content-center">
                                <div className='dayamic-dev-icon-section d-flex justify-content-center'>
                                    <img src={one} style={{ width: "50px", height: "68px" }} alt="" />
                                </div>
                            </div>
                            <div className='card-body pt-lg-4 pt-md-4 pt-sm-4 p-2 text-center'>
                                <h5>Web Development</h5>
                            </div>
                            <div className='card_set'>
                            
                            </div>
                        </div>
                        <div className="sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
                            <div className="card-body d-flex justify-content-center">
                                <div className='dayamic-dev-icon-section d-flex justify-content-center'>
                                    <img src={two} style={{ width: "50px", height: "68px" }} alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-lg-4 pt-md-4 pt-sm-4 p-2 card-body'>
                                <h5>Software Development</h5>
                            </div>
                            <div className='card_set'>

                            </div>
                        </div>
                        <div className=" sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
                            <div className="card-body d-flex justify-content-center">
                                <div className='dayamic-dev-icon-section d-flex justify-content-center'>
                                    <img src={three} style={{ width: "50px", height: "68px" }} alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-lg-4 pt-md-4 pt-sm-4 p-2 card-body'>
                                <h5>App Development</h5>
                            </div>
                            <div className='card_set'>

                            </div>
                        </div>
                        <div className="sec_4_card py-5 wid_set2 wid_set_25 wid_set2-50 wid_set-50 wid_set2-50 wid_set mar_set_4" >
                            <div className="card-body d-flex justify-content-center">
                                <div className='dayamic-dev-icon-section d-flex justify-content-center'>
                                    <img src={four} style={{ width: "50px", height: "68px" }} alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-lg-4 pt-md-4 pt-sm-4 p-2 card-body '>
                                <h5>Graphic Designer</h5>
                            </div>
                            <div className='card_set'>

                            </div>
                        </div>
                        <div className="sec_4_card py-5 wid_set wid_set2-50" >
                            <div className="card-body d-flex justify-content-center">
                                <div className='dayamic-dev-icon-section d-flex justify-content-center'>
                                    <img src={five} style={{ width: "50px", height: "68px" }} alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-lg-4 pt-md-4 pt-sm-4 p-2 card-body '>
                                <h5>UI/UX Designer</h5>
                            </div>
                            <div className='card_set'>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2