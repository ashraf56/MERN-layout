import React from 'react';
import './Hero.css';
const Hero2 = () => {
    return (
        <div className='hero d-block d-lg-none'>
            <div className='d-block d-lg-none container'>
                <nav className="navbar bg-transparent pt-3">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white" />
                        </svg></a>
                        <div className="d-flex" >
                            <button className="btn btn-outline-light" >Join group</button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='text-white mx-5 lh-0 pb-5 d-block d-lg-none' style={{ paddingTop: '250px', paddingBottom: '32px' }} >
                <h1 style={{ fontSize: '24px' }}>Computer Engineering</h1>
                <p className='fw-light  ' style={{ fontSize: '18px' }}>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Hero2;