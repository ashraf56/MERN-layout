import React from 'react';
import people from '../../assets/people.svg'

const Usertab = () => {
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
                                <button className="btn btn-white border  border-secondary " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z" fill="#6A6A6B" />
                                    </svg>
                                    <span className='ps-1 text-secondary '>Leave Group</span></button>
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

export default Usertab;