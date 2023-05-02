import { useFormContext } from 'react-hook-form';

const Step1 = () => {
    const { register } = useFormContext();

    return (
        <div>
            <label htmlFor="">Company</label>
            <input
                className='border-red-50 border-2 '
                {...register("company", { required: "Please enter your first name." })} // custom message
            />
            <label htmlFor="">Occupation</label>
            <input
                className='border-red-50 border-2'
                {...register("occupation", { required: "Please enter your last name." })} // custom message
            />
        </div>
    )
}

export default Step1