import React from 'react'

function Footer() {
    return (
        <div className='bg_footer py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4'>
                        <h3 className=''>TAXFILE INVOSOFT PVT LTD</h3>
                        <p className='pt-5'>
                            601-602 6th Floor, Shubh Square,Opp. Modh Vanik Wadi,Patel Nagar Lal Darwaja Main Road,Surat, Gujarat 395003
                        </p>
                        <p><span>Mobile</span>:95100 56789 / 95101 56789</p>
                        <p><span>Email</span>:hr@i-tax.in</p>
                    </div>
                    <div className='col-xl-4'>
                    <h3>Useful Links</h3>
                    <ul className='p-0'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Resource (Video)</li>
                    </ul>
                    </div>
                    <div className='col-xl-4'>
                    <h3>Our Newsletter</h3>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <div className='pos_set'>
                    <input type="text" placeholder='Enter Your Email' className='' />
                    </div>
                    <div className='pos_ab'>
                     <button>Subscribe</button>
                    </div>
                   
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer