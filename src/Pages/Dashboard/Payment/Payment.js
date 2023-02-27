import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking=useLoaderData();
    const {treatment,price, appointmentDate,slot}=booking;
    
    return (
        <div>
            <h2 className='text-3xl'>Payment for {treatment} </h2>
            <p className='text-xl'>pleace pay ${ price} for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;