import React from 'react';
import imgs from '../../assets/whole.svg'
import serch from '../../assets/search.svg'
import av from '../../assets/Avater2.png'

const UserNavbar = () => {
    return (
        <div>
               <nav className="navbar navbar-expand-lg bg-white  d-none d-lg-block" style={{
            paddingLeft:'72px', paddingRight:'79px'
        }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand ms-5 my-2" href="#">
                        <img src={imgs} />
                    </a>
                    <ul className="navbar-nav mx-auto rounded-pill  " style={{ width: '360px', height: '42px',background:'#F2F2F2' }}>
                        <div className="input-group   py-2 rounded-pill  position-absulate  "  style={{background:'#F2F2F2' }}>
                            <span className='px-2' style={{ position: 'relative', left: '10px', zIndex: '1', top: '1px', bottom: '1px' }}>
                                <img src={serch} />
                            </span>
                            <input type="text" className=" border-0  " placeholder="Search for your favorite groups in ATG" style={{ width: "242px", marginLeft: '20px' ,fontSize:'14px' ,background:'#F2F2F2' }} />
                        </div>

                    </ul>
                    <div>
                        <ul className="nav justify-content-end">

                            <li className="nav-item d-flex align-items-center ">
                            <img src={av}  />
                                <a className="nav-link dropdown-toggle fw-bold text-black" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    
                                    
                                    <span style={{fontSize:'14px', fontWeight:'400'}}>Siddharth Goyal</span></a>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default UserNavbar;