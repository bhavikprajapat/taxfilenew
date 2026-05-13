import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <div className='faqbg_set py-5 my-5 faq_pos_set '>
            <div className='container'>
                <h2 className='d-flex  justify-content-center'>FAQ'S</h2>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                        <div className='d-flex'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className='my-5 setAcc'>
                                    <Accordion.Header className='pos_set_faq w-100'><h4>Can I file income tax returns using your software? </h4></Accordion.Header>
                                    <Accordion.Body>
                                        Yes our platform supports e-filing for individuals and businesses.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='my-5 setAcc'>
                                    <Accordion.Header className='pos_set_faq w-100'><h4>Do you offer training and support?
                                    </h4></Accordion.Header>
                                    <Accordion.Body>
                                        Yes our platform supports e-filing for individuals and businesses.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='my-4 setAcc'
                                >
                                    <Accordion.Header className='pos_set_faq w-100'><h4>How is my data protected?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        We use industry-standard encryption, role-based access, and secure servers.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='my-4 setAcc'
                                >
                                    <Accordion.Header className='pos_set_faq w-100'><h4>What kinds of compliance do you support?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        We support GST, TDS, ROC, Professional Tax, and other statutory filings.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </div>
                    <div className='col-lg-6 d-lg-block d-sm-none d-none'>
                        <div className=' bg_set_faq2 d-flex justify-content-center align-items-center' >
                            <img src={require('../image/frequentlyaskedquestion.1695daf6cdb317ad0f56.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq