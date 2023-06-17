import React from 'react';

const Allbookings = ({appointmentOption}) => {
    const { name, slots,price } = appointmentOption;
    return (
        <div>
            <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>price:${price}</small></p>
                <div className="card-actions justify-center">
                  
                   <label
                      
                       
                        className="btn btn-primary text-white"
                       
                    >Delete</label>
                    
               
                </div>
            </div>
        </div>
        </div>
    );
};

export default Allbookings;