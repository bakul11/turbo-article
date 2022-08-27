import React from 'react';
import { Zoom } from 'react-reveal';
import './SubcriptionCart.css'
import { useNavigate } from 'react-router-dom'



const SubcriptionCart = ({ sub }) => {
    const { pack, user, price, devices, text1, text2, background, btn } = sub;

    const navigate = useNavigate();

    const handlePayment = () => {
        navigate(`/payment/${pack}/${price}`)
    }

    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <Zoom>
                <div className={ `shadow-lg p-4 extra-${background}` }>
                    <div className="content text-center">
                        <h4 className='text-capitalize fs-4 fw-bold'>{ pack }</h4>
                        <p className="text-secondary text-capitalize">{ user }</p>
                        <h2 className=" fw-bold">${ price }</h2>
                        <p className="text-secondary">{ devices }</p>
                    </div>
                    <div className="btn-sec">
                        <p>{ text1 }</p>
                        <p>{ text2 }</p>
                        <button className={ `btn btn-primary mt-2 w-100 rounded-pill new-${btn}` } onClick={ handlePayment }>Buy Pack</button>
                    </div>
                </div>
            </Zoom>
        </div >
    );
};

export default SubcriptionCart;