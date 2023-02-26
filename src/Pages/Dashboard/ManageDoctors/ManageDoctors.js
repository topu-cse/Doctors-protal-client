import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfimationModal from '../../Shared/ComfimationModal/ConfimationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
  const [deletingDoctor,setDeletingDoctor]=useState(null)

  const closeModal=()=>{
    setDeletingDoctor(null);
  }

  

  const { data: doctors, isLoading,refetch } = useQuery({
    
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  })
 

  const handeleDeleteDoctor=doctor=>{
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
     method:'DELETE',
     headers: {
       authorization: `bearer ${localStorage.getItem('accessToken')}`
     }
    })
    .then(res=>res.json())
     .then(data=>{
       if(data.deletedCount > 0){
        refetch();
        toast.success(`doctor ${doctor.name} deleted succesfully`)
       }
     })
   }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-3xl mb-4">Manage Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
          doctors && doctors.length && doctors.map((doctor, i) => <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td><div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={doctor.image} alt="" />
                  </div>
                </div></td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="confimationModal" className="btn btn-outline btn-accent">Delete</label>
                  
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
      {
        deletingDoctor&& <ConfimationModal
        title={`Are you sure you want to delete`}
        message={`If you delete ${deletingDoctor.name}. It cannot be undone`}
        successAction={handeleDeleteDoctor}
        successButtonName='Delete'
        modalData={deletingDoctor}
        closeModal={closeModal}

        ></ConfimationModal>
      }
    </div>
  );
};

export default ManageDoctors;


