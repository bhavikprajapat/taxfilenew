import { div } from 'motion/react-client'
import React from 'react'
import Marquee from 'react-fast-marquee'

function MarqueeCom2() {
    return (
        <div className='d-flex justify-content-center align-items-center h-100 justify-content-between gap-5 mt-2 m-0'>
            <div className='card ms-5'>
                <div className='card_section '>
                    <img src={require('../image/logomarquee2/1760160598769_AffiliationsOne.png')} alt="" className='w-100 h-100' />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761628906546_Narendra M.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1760680683064_G9 (1).png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761628484497_Amar Ghadage Patil.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761628682847_Anilkumar Vij.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761628709063_Chetan J. Bhavsar-1.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761628751026_DIPAK C PATEL.jpg')} className='w-100 h-100' alt="" />
                </div>
            </div>

        </div>
    )

}
function MarqueeCom3() {
    return (
        <div className='d-flex justify-content-center align-items-center h-100 justify-content-between gap-5 mt-2 m-0'>
            <div className='card ms-5'>
                <div className='card_section '>
                    <img src={require('../image/logomarquee2/1761628983779_Shah Consultant.png')} alt="" className='w-100 h-100' />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761816313661_Hiteshkumar Bathwar.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761815908953_K. B. JAIN.jpg')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761815920716_JAYSHREE GROVER (1).png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761815920716_JAYSHREE GROVER.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761816110912_AARYA_LOGO.png')} className='w-100 h-100' alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card_section'>
                    <img src={require('../image/logomarquee2/1761820706719_327155457_1210803286497537_8462825317718041698_n.jpg')} className='w-100 h-100' alt="" />
                </div>
            </div>

        </div>
    )

}


function Ourclient() {
    return (
        <div className='Ourclientbg '>
            <div className='text-center pt-5'>
                <h2 >OUR PRODUCT</h2>
                <p>
                    Our products are built with cutting-edge technology, ensuring reliability,

                    <br />   performance, and user satisfaction.
                </p>
            </div>
            <div>
                <Marquee className="" speed={100} gradient={false}>
                    <MarqueeCom2 />
                </Marquee>
            </div>
            <div className='m-0'>
                <Marquee direction="right" speed={100} gradient={false}>
                    <MarqueeCom3 />
                </Marquee>
            </div>

        </div>
    )
}

export default Ourclient