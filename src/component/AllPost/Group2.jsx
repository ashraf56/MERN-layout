import React from 'react';
import img1 from '../../assets/r1.png'
import img2 from '../../assets/r2.png'
import img3 from '../../assets/r3.png'
const Group2 = () => {
    return (
        <div>
                
                <div className='  row align-items-center justify-content-center py-2 ' style={{gap:'22px'}} >
<div className='col-sm-1' >
    <img src={img1}  />
</div>
<div className='col-sm-6 ' style={{height:'19px',width:' 104px' }}>
<p className='text-start me-2' style={{fontSize:'14px',fontWeight: "400"}}>Leisure </p>
</div>
<div className='col-sm-2'>
   <button className=' rounded-pill border border-secondary text-center text-light' style={{fontSize:'12px',width:'64px',height:'24px',borderRadius:'14px', background: '#000'}}>Followed</button>
</div>

                       </div>
                       <div className='  row align-items-center justify-content-center py-2 ' style={{gap:'22px'}} >
<div className='col-sm-1' >
    <img src={img3}  />
</div>
<div className='col-sm-6 ' style={{height:'19px',width:' 104px' }}>
<p className='text-start me-2' style={{fontSize:'14px',fontWeight: "400"}}>Activism </p>
</div>
<div className='col-sm-2'>
   <button className=' rounded-pill border border-secondary text-center' style={{fontSize:'12px',width:'64px',height:'24px',borderRadius:'14px', background: '#EDEEF0'}}>FOLLOW</button>
</div>

                       </div>
                       <div className='  row align-items-center justify-content-center py-2 ' style={{gap:'22px'}} >
<div className='col-sm-1' >
    <img src={img2}  />
</div>
<div className='col-sm-6 ' style={{height:'19px',width:' 104px' }}>
<p className='text-start me-2' style={{fontSize:'14px',fontWeight: "400"}}>MBA </p>
</div>
<div className='col-sm-2'>
   <button className=' rounded-pill border border-secondary text-center' style={{fontSize:'12px',width:'64px',height:'24px',borderRadius:'14px', background: '#EDEEF0'}}>FOLLOW</button>
</div>

                       </div>
                       <div className='  row align-items-center justify-content-center py-2 ' style={{gap:'22px'}} >
<div className='col-sm-1' >
    <img src={img1}  />
</div>
<div className='col-sm-6 ' style={{height:'19px',width:' 104px' }}>
<p className='text-start me-2' style={{fontSize:'14px',fontWeight: "400"}}>Philosophy </p>
</div>
<div className='col-sm-2'>
   <button className=' rounded-pill border border-secondary text-center' style={{fontSize:'12px',width:'64px',height:'24px',borderRadius:'14px', background: '#EDEEF0'}}>FOLLOW</button>
</div>

                       </div>
        </div>
    );
};

export default Group2;