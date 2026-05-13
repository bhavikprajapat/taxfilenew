import React, { useState } from 'react'
import logo from '../image/logo.png'
import { FaChevronDown } from "react-icons/fa";
import { FaCaretDown } from 'react-icons/fa6';
import { IoCall, IoCallOutline } from 'react-icons/io5';
import Navset from './Navset';
import { IoMdMenu } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='bg-white  header'>
            <Navset />
            <div className='container py-3'>
                <div className='d-flex justify-content-between pos_set '>
                    <div>
                        <img src={logo} alt="" className='logo_set' />
                    </div>
                    <div className='display_set'>
                        <ul className='nav d-lg-flex d-none gap_set align-items-center h-100 fw-bold'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Dealer</li>
                            <li >News <FaChevronDown />
                                <ul className='dropdown position-absolute'>
                                    <li>Important Date</li>
                                    <li>Tax Notice</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <div className='d-flex align-items-center'>
                        <div>
                            <button className='btn_set'>GET A DEMO </button>
                        </div>
                        <div>
                            <button className='btn_set'>Login <FaCaretDown /> </button>
                        </div>
                        <div className=' display_set display_set_side border-start px-2 align-items-center  '>
                            <div className=' fw-bold '>
                                <button className='btn_set2'><IoCallOutline /></button>
                            </div>
                            <div className='px-2'>
                                <p className='m-0'>Have Any Questions?</p>
                                <p className='m-0 fw-bold'>9510056789</p>

                            </div>
                        </div>


                    </div>
                   <div>
                        <Button className='btn_sec1' onClick={() => setShow(true)}>
                            <div className='menu_icon_set' style={{ fontSize: "30px" }} >
                                <li><IoMdMenu /></li>

                            </div>
                        </Button>

                        <Modal

                            show={show}
                            onHide={() => setShow(false)}
                            aria-labelledby="example-custom-modal-styling-title"
                            className='wid_set_sec1'
                        >
                            <Modal.Header closeButton className='border-bottom-0'>

                            </Modal.Header>
                            <Modal.Body>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Product</li>
                                    <li>Career</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                    <li>Dealer</li>
                                    <li >News</li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                    </div>

                </div>
                <div>

                </div>
                 
            </div>

        </div>

    )
}

export default Header