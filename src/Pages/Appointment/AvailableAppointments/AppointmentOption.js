import React from 'react';
import PrivateRoute from '../../../Routes/PrivateRoute/PrivateRoute';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots,price } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>price:${price}</small></p>
                <div className="card-actions justify-center">
                   <PrivateRoute>
                   <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                   </PrivateRoute>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;