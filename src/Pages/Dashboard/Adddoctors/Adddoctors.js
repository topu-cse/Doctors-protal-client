import React from 'react';
import { useForm } from 'react-hook-form';

const Adddoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddDoctor = data => {
        console.log(data)
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add Doctors</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text"> Speacialty</span></label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Speacialty</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default Adddoctors;