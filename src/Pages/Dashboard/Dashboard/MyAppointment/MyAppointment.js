import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthProvider'

const MyAppointment =()=>  {
    const {user}=useContext(AuthContext)

    const url =`http://localhost:5000/booking?email=${user?.email}`;

    const{data:bookings=[]}=useQuery({
        useQuery:['bookings',user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
        
    
        return (
            <div>
                <h3 className="tsxt-3xl mb-"> My Appointment</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Data</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                          {
                           bookings.map((booking,i)=>  <tr key={booking._id}>
                            <th>{i+1}</th>
                            <td> {booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appointmentDate}</td>
                            <th> {booking.slot}</th>
                        </tr>)
                          }
                          
                        </tbody>
                    </table>
                </div>
            </div>
        )
        }


export default MyAppointment
