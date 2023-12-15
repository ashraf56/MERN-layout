import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imgs from '../../assets/auth.svg'
import fb from '../../assets/f_logo_RGB-Blue_1024.png'
import gl from '../../assets/gl.svg'
import c from '../../assets/cross.svg'
import c2 from '../../assets/cross2.svg'
import './style.css'
function Loginmodals() {


    return (
        <div className='w-100 st'>

            <div
                className="modalbody1  position-relative"  >
                <div className='cross'>
                    <img src={c} alt="" srcset="" />
                </div>
                <Modal.Dialog>


                    <Modal.Body>
                        <p className='ptag d-none d-lg-block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                        <div className=''>

                            <div className='row align-items-center' style={{ paddingLeft: '16px ', paddingRight: '16px' }}>
                                <div className='col-lg-7 d-flex justify-content-between align-items-center'>
                                    <h1 className='h01  d-none d-lg-block'> Sign In</h1>
                                    <h1 className='h01  d-block d-lg-none'> Welcome back!</h1>
                                    <img src={c2} className='d-block d-lg-none ' style={{ paddingLeft: '100px', paddingTop: '22px' }} />
                                </div>
                                <div className='col-lg-5 d-none d-lg-block' style={{ fontSize: '13px' }}>

                                    Don’t have an account yet? <span style={{ color: '#2F6CE5' }}> Create new for free!</span>
                                </div>
                            </div>
                            <div className='row ' style={{ padding: '16px 16px' }}>
                                <div className='col-lg-6'>
                                    <div className="">
                                        <input type="email" className=" ps-3  inputfeld" id="exampleFormControlInput1" placeholder="Email" />
                                    </div>
                                    <div className=" position-relative" style={{ marginBottom: '19px' }}>
                                        <input type="email" className="ps-3 inputfeld" id="exampleFormControlInput1" placeholder="Password" />  <label for="exampleFormControlInput1" className=" eye" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#8A8A8A" />
                                        </svg></label>

                                    </div>



                                    <div className='d-flex d-lg-block  justify-content-between '>
                                        <button className='signinbtn '>Sign In</button>
                                        <a href="" className='d-block d-lg-none' style={{ color: '#495057' }}>or, Create Account</a>
                                    </div>
                                    <button className=' border border-secondary signinbtn2 align-items-center' style={{ marginBottom: '8px' }}>
                                        <img src={fb} />
                                        <span className='ps-1'> Sign in with Facebook</span></button>
                                    <button className=' signinbtn2 border border-secondary align-items-center'>
                                        <img src={gl} />
                                        <span className='ps-2'> Sign in with Google</span></button>

                                    <p className='text-center ' style={{ paddingTop: '23px' }}>Forgot Password?</p>


                                </div>
                                <div className='col-lg-6 d-none d-lg-block'>
                                    <img src={imgs} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>


                </Modal.Dialog>
            </div>
        </div>
    );
}

export default Loginmodals;