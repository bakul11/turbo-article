import React from 'react';
import SubcriptionCart from './SubcriptionCart';
import RubberBand from 'react-reveal/RubberBand';




const subData = [
    {
        pack: 'student',
        price: 200,
        user: 'limited users',
        devices: 'per device /month',
        text1: 'can set according to student needs and templetes',
        text2: '1GB of storage,speed of 10MBps one shared work',
        background: 'primary',
    },
    {
        pack: 'Premium',
        price: 900,
        user: 'limited users',
        devices: 'per device /month',
        text1: 'can set according to student needs and templetes',
        text2: '1TB of storage,speed of 100MBps one shared work',
        extraBg: 'extra',
        background: 'danger',
        btn: 'btn2'
    },
    {
        pack: 'Company',
        price: 600,
        user: 'limited users',
        devices: 'per device /month',
        text1: 'can set according to student needs and templetes',
        text2: '2GB of storage,speed of 20MBps one shared work',
        background: 'success',
    }
]

const Subcription = () => {
    return (
        <div className='container' id='price2' style={{marginTop:'150px'}}>
            <div className="pricing text-center">
                <RubberBand>
                    <h5 className='text-warning'>Pricing</h5>
                    <h4 className='fw-bold fs-4 mb-5'>Choose Your Best Plan</h4>
                </RubberBand>
            </div>
            <div className="row gy-3">
                {
                    subData.map(sub => <SubcriptionCart sub={ sub } key={ sub.price }></SubcriptionCart>)
                }
            </div>
        </div>
    );
};

export default Subcription;