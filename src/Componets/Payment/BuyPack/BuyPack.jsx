import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/FirebaseConfig';
import CheckoutForm from '../CheckoutForm';


const stripePromise = loadStripe('pk_test_51LVhMvKEV8vBak4Xltts6pPUEXFdbZ1rFTuxrMJB5OY53jCS01Z9OTljkdYUMa72outzi3ZtohEcTM3uCWb3afCA00Vv0coq3l');

const BuyPack = () => {
    const { pack, price } = useParams();
    const [user] = useAuthState(auth);
    console.log(user)

    return (
        <div className='container shadow-lg card text-bg-secondary border-0' style={{ marginTop: '150px', marginBottom: '120px' }}>
            <div className="Pack text-center">
            <div class="card-header">
                  <h2>Welcome to <span className='text-danger fw-bold'>{pack} </span> Pack</h2>
                  </div> 
                  <div class="card-body">
                  <h6>Price : {price}</h6>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Pay Now</a>
                 </div>             
               
            </div>
            <div class="">
  <div class=" ">
    <div class="collapse multi-collapse " id="multiCollapseExample1">
      <div class="card card-body w-50 mx-auto p-5 border-0">
      <Elements stripe={stripePromise}>
    <CheckoutForm price={price} pack={pack} user={user}/>
  </Elements>
      </div>
    </div>
  </div>
  </div>
        </div>
    );
};

export default BuyPack;