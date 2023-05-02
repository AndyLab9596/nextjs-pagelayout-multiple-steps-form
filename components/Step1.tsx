import { useFormContext } from 'react-hook-form';

const Step1 = () => {
    const { register } = useFormContext();

    return (
        <div>
            <label htmlFor="">First Name</label>
            <input
                className='border-red-50 border-2 '
                {...register("firstName", { required: "Please enter your first name." })} // custom message
            />
            <label htmlFor="">Last Name</label>
            <input
                className='border-red-50 border-2'
                {...register("lastName", { required: "Please enter your last name." })} // custom message
            />
        </div>
    )
}

export default Step1