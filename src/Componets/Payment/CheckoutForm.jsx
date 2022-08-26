import React, { useEffect, useState } from 'react';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import { useNavigate,Link } from 'react-router-dom'

const CheckoutForm = ({price,pack,user}) => {
  const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] =useState('')
    const [success, setSuccess] = useState('');
    const [clientSecret , setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
const {displayName,email} = user;
const navigate = useNavigate();

    useEffect( () =>{
        fetch('https://whispering-ridge-30056.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({ price })
      })
          .then(res => res.json())
          .then(data => {
              if (data?.clientSecret) {
                  setClientSecret(data.clientSecret);
              }
          });

  }, [price]);
  

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        if(!stripe || !elements){
            return;
        }
        
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
          }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    });
      
          setCardError(error?.message || '')
          setSuccess('');
          setProcessing(true);

     //confirm card payment 
     const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  name: displayName,
                  email: email
              },
          },
      },
  );

  if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
 
  }
  else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess('Congrats! Your payment is completed.')
      // navigate('/premium')
       //store payment on database
       const payment = {
        pack: pack,
        transactionId: paymentIntent.id
    }
    fetch(`https://whispering-ridge-30056.herokuapp.com/user/${email}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
    }).then(res=>res.json())
    .then(data => {
        setProcessing(false);
        console.log(data);
    })

  }
      
    }
    return (
     <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-success btn-sm mt-3' disabled={!stripe}>
        Pay
      </button>
    </form>
  {
    cardError && <p className='text-danger'>{cardError}</p>
}
  {
    success && <div className='text-success mt-2'>
   <p >{success}</p>
    <p>Your transaction Id: <span className="text-info font-bold">{transactionId}</span> </p>
    <Link to="/premium" className='btn btn-primary btn-sm'>Go Premium Blog..</Link>
    </div>
 
    
}
     </>
  
    );
};

export default CheckoutForm;