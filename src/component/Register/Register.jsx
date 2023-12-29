import React from 'react';
import img1 from '../../assets/tree.png'
import avatar1 from '../../assets/Avater1.png'
import steel from '../../assets/steel.png'
import eye from '../../assets/eye.svg'
import sh from '../../assets/share.svg'
import dot from '../../assets/threedot.svg'
import Navbar from '../Navbar/Navbar';
import Tabs from '../Tabs/Tabs';
import Registermodal from './Registermodal';
const Register = () => {
  return (
    <div>

      <Registermodal></Registermodal>
      <Navbar></Navbar>
      <Tabs></Tabs>
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
              <div className="card-body">
                <p className='fw-semibold'>🔬️ Education</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 className=" " style={{ fontSize: '22px' }}>Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                  <button className='btn btn-light  btn-sm' style={{ marginTop: '-20px' }}>
                    <img src={dot} />
                  </button>
                </div>
              </div>
            </div>


          </div>
          <div className='col-lg-5 col-md-2 container mx-auto d-none d-lg-block'>


          </div>
        </div>
      </div>
    </div>



  );
};

export default Register;