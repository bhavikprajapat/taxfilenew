import React from 'react'

function Affiliations() {
    return (
        <div className='Affiliations_bg '>
            <div className='container'>
                <div className='text-center pt-5'>
                    <h2 >AFFILIATIONS & MEMBERSHIPS
</h2>
                    <p>
                        We’re proud to partner with leading businesses that trust our IT solutions to drive innovation

                        <br />   and efficiency. Their success inspires us to deliver excellence every day.
                    </p>
                </div>
                <div className='d-flex col-12 flex-wrap justify-content-between' style={{ background: "white" ,padding:"20px 10px"}}>
                    <div >
                        <img src={require('../image/Affiliations/1762510302849_AffiliationsFour.png')} className='img_set_size' alt="" />
                    </div>
                    
                    <div >
                        <img src={require('../image/Affiliations/1762510502340_AffiliationsFive.png')} className='img_set_size' alt="" />
                    </div>
                    <div >
                        <img src={require('../image/Affiliations/1762510706911_AffiliationsSecond.png')} className='img_set_size' alt="" />
                    </div>
                    <div >
                        <img src={require('../image/Affiliations/1762510871502_SGCCI.png')} className='img_set_size' alt="" />
                    </div>
                    <div >
                        <img src={require('../image/Affiliations/1763383387610_1762578806273_AffiliationsOne.png')} className='img_set_size' alt="" />
                    </div>
                    <div >
                        <img src={require('../image/Affiliations/progress.png')} className='img_set_size' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Affiliations