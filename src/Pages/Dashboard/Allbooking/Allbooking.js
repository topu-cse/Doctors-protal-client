import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Allbookings from './Allbookings';


const Allbooking = () => {

    const { data: appointmentOptions = [],  } = useQuery({
        queryKey: ['appointmentOption' ],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?`);
            const data = await res.json();
            return data
        }
    });

    return (
        <div>
            
            <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <Allbookings
                        key={option._id}
                        appointmentOption={option}
                       
                    ></Allbookings>)
                }
            </div>
          
        </section>
        </div>
    );
};

export default Allbooking;