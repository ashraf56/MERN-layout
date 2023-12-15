import React from 'react';
import people from '../../assets/people.svg'
const Tabs = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className='d-none d-lg-block'>
                <nav className="navbar navbar-expand-lg  ">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse " >
                            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                                <li className="nav-item nav-underline">
                                    <a className="nav-link active " style={{ height: '60px' }} >All Posts(32)</a>
                                </li>
                                <li className="nav-item disable">
                                    <a className="nav-link " href="#">Article</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " >Event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " >Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " >Job</a>
                                </li>
                            </ul>
                            <div className="d-flex " >

                                <button className="btn btn-light mx-3 " >Write a Post <span className='ps-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <g clip-path="url(#clip0_1_839)">
                                            <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_839">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span></button>
                                <button className="btn btn-primary" >
                                    <img src={people} alt="" srcset="" />
                                    <span className='ps-1'>Join Group</span></button>
                            </div>

                        </div>
                    </div>
                </nav>
                <span className="d-none d-lg-block" style={{ marginTop: '-25px' }}>
                    <hr />
                </span>
            </div>

            <div className='d-block d-lg-none container'>
                <nav class="navbar bg-body">
                    <div class="container-fluid">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-underline">
                                <a className="nav-link fw-bold text-black "  >Posts(368)</a>
                            </li>

                        </ul>
                        <div class="d-flex" >
                            <button className="btn btn-light mx-3 fw-semibold" >Filter: All <span className='ps-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <g clip-path="url(#clip0_1_839)">
                                        <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_839">
                                            <rect width="22" height="22" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span></button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Tabs;