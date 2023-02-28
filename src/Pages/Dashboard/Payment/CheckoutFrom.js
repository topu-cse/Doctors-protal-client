import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutFrom = ({booking}) => {
    const [cardError,setCardError]=useState('')
    const stripe = useStripe();
    const elements = useElements();
    const {price}=booking;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
          // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      });
   if(error){
   
    setCardError(error.message);
   }
   else{
    setCardError('');
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
            <button className='btn btn-sm mt-4' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    {<p className="text-red-500">{cardError}</p>}
        </>
    );
};

export default CheckoutFrom;