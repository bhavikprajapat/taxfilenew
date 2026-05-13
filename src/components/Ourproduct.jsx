import axios from 'axios';
import { h1 } from 'motion/react-client';
import { div } from 'motion/react-m'
import React, { useEffect, useState } from 'react'

function Ourproduct() {
    const [newdata, setnewdata] = useState([])
    useEffect(() => {
        axios
            .get('https://taxfileapi.myeventz.in/api/product/productList',)
            .then(function (response) {
                // console.log(response.data.data);
                setnewdata(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])
    console.log(newdata)


    return (
        // <div className='bg_color_set_Ourproduct my-5'>
        //     <div className='container contain'>
        //         <div className='ourproductbg '>
        //             <div>
        //                 <div className='text-center '>
        //                     <h2 >OUR PRODUCT</h2>
        //                     <p>
        //                         We’re proud to partner with leading businesses that trust our IT solutions to drive innovation

        //                         <br />   and efficiency. Their success inspires us to deliver excellence every day.
        //                     </p>
        //                 </div>
        //                 <div>
        //                     <div className='d-lg-flex d-md-flex d-sm-flex flex-wrap gap_set1  my-5'>
        //                         <div className="sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
        //                             <div className="card-body d-flex justify-content-center">
        //                                 <div className='img_bg_set '>
        //                                     <img src={require('../image/Ourproduct/1769507697455_1Asset 9.png')} className='w-50' alt="" />
        //                                 </div>
        //                             </div>
        //                             <div className='downset'>
        //                                 <h5>View Product</h5>
        //                             </div>
        //                             <div className=''>

        //                             </div>


        //                         </div>
        //                         <div className="sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
        //                             <div className="card-body img_bg_set d-flex justify-content-center h-100">
        //                                 <div className=' '>
        //                                     <img src={require('../image/Ourproduct/1766468411923_download (7).png')} className='w-50' alt="" />
        //                                 </div>

        //                             </div>
        //                             <div className='downset'>
        //                                 <h5>View Product</h5>
        //                             </div>


        //                         </div>
        //                         <div className=" sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
        //                             <div className="card-body d-flex justify-content-center h-100">
        //                                 <div className=' img_bg_set'>
        //                                     <img src={require('../image/Ourproduct/1765365914068_download.png')} className='w-50' alt="" />
        //                                 </div>

        //                             </div>
        //                             <div className='downset'>
        //                                 <h5>View Product</h5>
        //                             </div>

        //                         </div>
        //                         <div className="sec_4_card py-5 wid_set2 wid_set_25 wid_set2-50 wid_set-50 wid_set2-50 wid_set mar_set_4" >
        //                             <div className="card-body d-flex justify-content-center h-100">
        //                                 <div className=' img_bg_set'>
        //                                     <img src={require('../image/Ourproduct/1764762155055_download (5).png')} className='w-50' alt="" />
        //                                 </div>

        //                             </div>

        //                             <div className='downset'>
        //                                 <h5>View Product</h5>
        //                             </div>
        //                         </div>
        //                         <div className="sec_4_card py-5 wid_set wid_set2-50" >
        //                             <div className="card-body d-flex justify-content-center h-100">
        //                                 <div className=' img_bg_set'>
        //                                     <img src={require('../image/Ourproduct/1769507697455_1Asset 9.png')} className='w-50' alt="" />
        //                                 </div>

        //                             </div>

        //                             <div className='downset'>
        //                                 <h5>View Product</h5>
        //                             </div>

        //                         </div>

        //                     </div>




        //                 </div>

        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div>
            <div className='bg_color_set_Ourproduct mt-5'>
                <div className='container contain'>
                    <div className='ourproductbg '>
                        <div className='text-center '>
                            <h2 >OUR PRODUCT</h2>
                            <p>
                                We’re proud to partner with leading businesses that trust our IT solutions to drive innovation

                                <br />   and efficiency. Their success inspires us to deliver excellence every day.
                            </p>
                        </div>
                        <div className='d-lg-flex d-md-flex d-sm-flex flex-wrap gap_set1  my-5'>
                            {
                                newdata.slice(0, 5).map((items, index) => {
                                    return (
                                        <div className="product_box_set flex-fill sec_4_card py-5 wid_set_25 wid_set_33 wid_set-50 wid_set2-50 wid_set mar_set_4" >
                                            <div className="card-body d-flex justify-content-center h-100">
                                                <div className=' d-flex align-items-center justify-content-center card_img'>
                                                    <img src={`https://taxfileapi.myeventz.in/Product/${items.FileName}`} className=' w-100 p-2' alt="" />
                                                </div>
                                            </div>
                                            <div className='downset'>
                                                <h5>View Product</h5>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <div className='drop2_ourproduct'>
                                                    <h6>{items.ProductName}</h6>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourproduct