import React from 'react';
import img1 from '../../assets/tree.png'
import avatar1 from '../../assets/Avater1.png'
import avatar2 from '../../assets/Avater2.png'
import steel from '../../assets/steel.png'
import car from '../../assets/car.png'
import eye from '../../assets/eye.svg'
import sh from '../../assets/share.svg'
import dot from '../../assets/threedot.svg'
import cal from '../../assets/cal.svg'
import loc from '../../assets/location.svg'
import b from '../../assets/case.svg'

const Allpost = () => {
  return (
    <div className='container-fluid container mx-auto'>
      <div className='row h-100'>
        <div className='col-lg-7 col-md-10 '>
          {/* card 1 */}
          <div className="card mb-3">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className='fw-semibold'>✍️ Article</p>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className=" pe-5" style={{ fontSize: '22px' }}>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                <button className='btn btn-light  btn-sm' style={{ marginTop: '-20px' }}>
                  <img src={dot} />
                </button>
              </div>

              <p className="card-text" >I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>


              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar1} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Sarthak Kamra
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>1.4k views</span>
                    </p>

                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 d-none d-lg-block"><small className="text-body-secondary d-flex align-items-center">

                    <img src={eye} />

                    <span className='ps-1' style={{ fontSize: '14px' }}>
                      1.4k views
                    </span>
                  </small>
                  </div>
                  <div className='d-none d-lg-block'>
                    <button className='btn btn-light'>
                      <img src={sh} />
                    </button>
                  </div>
                  <div className='d-block d-lg-none'>
                    <button className='btn btn-light'>
                      <img src={sh} />
                      <span className='ps-1'>share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card mb-3">
            <img src={steel} className="card-img-top" />
            <div className="card-body">
              <p className='fw-semibold'>🔬️ Education</p>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className=" " style={{ fontSize: '22px' }}>Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                <button className='btn btn-light  btn-sm' style={{ marginTop: '-20px' }}>
                  <img src={dot} />
                </button>
              </div>

              <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>


              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar1} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Sarah West
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>1.4k views</span>
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 d-none d-lg-block"><small className="text-body-secondary d-flex align-items-center">
                    <img src={eye} />
                    <span className='ps-1' style={{ fontSize: '14px' }}>
                      1.4k views
                    </span>
                  </small>
                  </div>
                  <div className='d-none d-lg-block'>
                    <button className='btn btn-light'>
                      <img src={sh} />
                    </button>
                  </div>
                  <div className='d-block d-lg-none'>
                    <button className='btn btn-light'>
                      <img src={sh} /> <span className='ps-1'>share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="card mb-3">
            <img src={car} className="card-img-top" />
            <div className="card-body">
              <p className='fw-semibold'>🗓️ Meetup</p>
              <div className='d-flex justify-content-between'>

                <h5 className="pe-5 " style={{ fontSize: '22px' }}>Finance & Investment Elite Social Mixer @Lujiazui</h5>

                <div className=' dropdown '>
                  <button className='btn btn-light  btn-sm ' data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={dot} />
                  </button>
                  <ul class="dropdown-menu ">
                    <li><a class="dropdown-item" >Edit</a></li>
                    <li><a class="dropdown-item" >Report</a></li>
                    <li><a class="dropdown-item" >Option 3</a></li>
                  </ul>
                </div>
              </div>

              <div className='d-flex fw-semibold ' style={{ paddingBottom: '16px' }}>
                <div className='pe-5 d-flex align-items-center'>
                  <img src={cal} />
                  <span className='ps-1' style={{ fontSize: '15px' }}> Fri, 12 Oct, 2018</span>
                </div>

                <div className='d-flex align-items-center'>
                  <img src={loc} />
                  <span className='ps-1' style={{ fontSize: '15px' }}>
                    Ahmedabad, India</span>
                </div>

              </div>

              <button className='btn mb-3 fw-bold btn-outline-dark w-100' style={{
                color: '#E56135', height: '38px', fontSize: '13px'
              }}>Visit Website</button>

              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar1} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Ronal Jones
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>800 views</span>
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 align-items-center  d-none d-lg-block"><small className="text-body-secondary d-flex align-items-center">

                    <img src={eye} />

                    <span className='ps-1' style={{ fontSize: '14px' }}>
                      800 views
                    </span>
                  </small></div>
                  <div className='d-none d-lg-block'>
                    <button className='btn btn-light'>
                      <img src={sh} />
                    </button>
                  </div>
                  <div className='d-block d-lg-none'>
                    <button className='btn btn-light'>
                      <img src={sh} /> <span className='ps-1'>share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="card mb-3">
            <div className="card-body">
              <p className='fw-semibold'>💼️ Job</p>
              <div className='d-flex justify-content-between'>

                <h5 className=" pe-5 d-none d-md-block" style={{ fontSize: '22px' }}>Software Developer</h5>
                <h5 className=" pe-5 d-block d-md-none" style={{ fontSize: '22px' }}>Software Developer-II</h5>

                <button className='btn btn-light  btn-sm' >
                  <img src={dot} />
                </button>

              </div>

              <div className='d-flex fw-semibold ' style={{ paddingBottom: '16px' }}>
                <div className='pe-5 d-none d-md-flex align-items-center'>
                  <img src={b} />
                  <span className='ps-1' style={{ fontSize: '15px' }}>
                    Innovaccer Analytics Private Ltd.
                  </span>
                </div>
                <div className='pe-5 d-flex d-md-none align-items-center'>
                  <img src={b} />
                  <span className='ps-1' style={{ fontSize: '15px' }}>
                    Innovaccer Analytics...
                  </span>
                </div>

                <div className='d-flex align-items-center'>
                  <img src={loc} />
                  <span className='ps-1' style={{ fontSize: '15px' }}>
                    Noida, India</span>
                </div>

              </div>

              <button className='btn mb-3 fw-bold btn-outline-dark w-100' style={{
                color: '#02B875', height: '38px', fontSize: '13px'
              }}>Apply on Timesjobs</button>

              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar2} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Joseph Gray
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>1.4k views</span>
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 d-none d-lg-block"><small className="text-body-secondary d-flex align-items-center">

                    <img src={eye} />

                    <span className='ps-1' style={{ fontSize: '14px' }}>
                      1.4k views
                    </span>
                  </small></div>
                  <div className='d-none d-lg-block'>
                    <button className='btn btn-light '>
                      <img src={sh} />
                    </button>
                  </div>
                  <div className='d-block d-lg-none'>
                    <button className='btn btn-light'>
                      <img src={sh} />
                      <span className='ps-1'>share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='col-lg-5 col-md-2 container mx-auto d-none d-lg-block'>

          <div className='d-flex justify-content-between align-items-center m-5'>
            <div className='pt-3'>
              <div className='d-flex align-items-center'>
                <img src={loc} />
                <span className='ps-1' style={{ fontSize: '15px' }}>
                  Noida, India</span>
              </div>

            </div>

            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_1_848)">
                    <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_848">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div><hr className='mx-5' style={{ marginTop: '-40px', }} />
          <div className='d-flex justify-content-center m-5'>
            <span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g opacity="0.5" clip-path="url(#clip0_1_853)">
                <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1_853">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg></span>
            <p>
              Your location will help us serve better and extend a personalised experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allpost;