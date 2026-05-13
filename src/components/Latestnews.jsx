import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import DOMPurify from "dompurify";


function Latestnews({ items }) {
    const [newsdata, setnewsdata] = useState([])
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        axios
            .get('https://taxfileapi.myeventz.in/api/news/newsList?Type=NEWS',)
            .then(function (response) {
                console.log(response.data.data);
                setnewsdata(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    console.log(newsdata)
    return (
        <div className='Latestbg'>
            <div className='container'>
                <div className='text-center '>
                    <h2 >THE LATEST NEWS</h2>
                    <p>
                        Keep up with Taxfile Invosoft Pvt Ltd newest updates,

                        <br />   milestones, and technology trends.
                    </p>
                </div>
                {/* <div className='row '>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className="card h-100 p-2 mar_set" >
                            <img src={require('../image/Latestnews/1763729442921_income-tax-slab.jpg')} style={{
                                height: 240,
                                width: "100%",
                                border: "1px solid rgb(222, 226, 230)",
                                borderRadius: 12
                            }} alt="" />

                            <div className="card-body">
                                <div className='d-xl-flex  justify-content-lg-between align-items-center'>
                                    <div >
                                        <button className='news_btn'>Key Income Tax News</button>
                                    </div>
                                    <div >
                                        <p> <CiCalendarDate />Nov 11, 2025</p>
                                    </div>

                                </div>

                                <p className="card-text mt-2">India’s latest income tax updates bring major relief to the middle class, with the new tax regime making income up to <span className='fw-bold'>₹12 lakh effectively tax-free du.</span></p>
                                <a href="#" style={{
                                    background: "linear-gradient(135deg, #3bb3c3, #1c555d)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textDecoration: "none"
                                }}>read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className="card p-2 h-100 mar_set" >
                            <img src={require('../image/Latestnews/1763383623521_gettyimages-2167871482-612x612.jpg')} style={{
                                height: 240,
                                width: "100%",
                                border: "1px solid rgb(222, 226, 230)",
                                borderRadius: 12
                            }} alt="" />
                            <div className="card-body">
                                <div className='d-xl-flex  justify-content-lg-between align-items-center'>
                                    <div >
                                        <button className='news_btn'>Freedom GST</button>
                                    </div>
                                    <div >
                                        <p> <CiCalendarDate />Nov 14, 2025</p>
                                    </div>

                                </div>

                                <p className="card-text mt-2">India’s latest income tax updates bring major relief to the middle class, with the new tax regime making income up to <span className='fw-bold'>₹12 lakh effectively tax-free du.</span></p>
                                <a href="#" style={{
                                    background: "linear-gradient(135deg, #3bb3c3, #1c555d)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textDecoration: "none"
                                }}>read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 md:pt-3 sm:pt-3 '>
                        <div className="card p-2 h-100 mar_set" >
                            <img src={require('../image/Latestnews/1760098891116_tax-2025.jpeg')} style={{
                                height: 240,
                                width: "100%",
                                border: "1px solid rgb(222, 226, 230)",
                                borderRadius: 12
                            }} alt="" />
                            <div className="card-body">
                                <div className='d-xl-flex  justify-content-lg-between align-items-center'>
                                    <div >
                                        <button className='news_btn'>TAX
                                        </button>
                                    </div>
                                    <div >
                                        <p> <CiCalendarDate />Oct 6, 2025
                                        </p>
                                    </div>

                                </div>

                                <p className="card-text mt-2">India’s latest income tax updates bring major relief to the middle class, with the new tax regime making income up to <span className='fw-bold'>₹12 lakh effectively tax-free du.</span></p>
                                <a href="#" style={{
                                    background: "linear-gradient(135deg, #3bb3c3, #1c555d)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textDecoration: "none"
                                }}>read more...</a>
                            </div>
                        </div>
                    </div>


                </div> */}

                <div className='row '>
                    {
                        newsdata.slice(0, 3).map((items, index) => {
                            return (
                                <div className='col-lg-4 col-md-6 col-sm-12 mt-sm-3 mt-3'>
                                    <div key={index} className="card h-100 p-2 mar_set" >
                                        <img src={`https://taxfileapi.myeventz.in/News/${items.FileName}`} style={{
                                            height: 240,
                                            width: "100%",
                                            border: "1px solid rgb(222, 226, 230)",
                                            borderRadius: 12
                                        }} alt="" />

                                        <div className="card-body">
                                            <div className='d-xl-flex  justify-content-lg-between align-items-center'>
                                                <div >
                                                    <button className='news_btn'>{items.Title}</button>
                                                </div>
                                                <div >
                                                    <p> <CiCalendarDate />Nov 11, 2025</p>
                                                </div>

                                            </div>

                                            <p className="card-text mt-2" style={{
                                                display: "-webkit-box",
                                                WebkitLineClamp: expandedIndex === index ? "unset" : 3,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden"
                                            }}>
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(
                                                            items.Descrption
                                                        )
                                                    }}
                                                />
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setExpandedIndex(
                                                            expandedIndex === index ? null : index
                                                        );
                                                    }}
                                                    style={{
                                                        background: "linear-gradient(135deg, #3bb3c3, #1c555d)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        textDecoration: "none",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    {expandedIndex === index
                                                        ? "Read Less..."
                                                        : "Read More..."}
                                                </a>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='d-flex justify-content-center pt-3 mar_set'>
                    <button className='news_btn1'>READ MORE NEWS</button>
                </div>

            </div>

        </div>
    )
}

export default Latestnews