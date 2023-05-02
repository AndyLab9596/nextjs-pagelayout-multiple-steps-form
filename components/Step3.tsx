import { useFormContext } from 'react-hook-form';

const Step3 = () => {
    const { register } = useFormContext();

    return (
        <div>
            <label htmlFor="">Category</label>
            <input
                className='border-red-50 border-2 '
                {...register("category", { required: "Please enter your first name." })} // custom message
            />
        </div>
    )
}

export default Step3