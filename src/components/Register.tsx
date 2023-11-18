import { useForm, SubmitHandler } from "react-hook-form"
import { useMemo, useState } from 'react'
import axiosAuthService from '../utils/authAPI'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const { register, handleSubmit } = useForm<RegisterFormValues>()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        try {
            setLoading(true)
            await axiosAuthService.registerAPI(data)
            toast.success('User registered successfully!')
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error('Error registering user!')
        } finally {
            setLoading(false)
        }
    }
    const formStyles = useMemo(() => {
        return {
            border: '2px solid black',
            padding: '10px',
            width: '200px',
            margin:'0 auto'
        }
    }, [])

    return (
        <div style={formStyles}>
            <h1>Register</h1>
            {
                loading?
                <>Loading...</>
                :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('username')} placeholder="username" />
                    <input type="email" {...register('email')} placeholder="email" />
                    <input type="password" {...register('password')} placeholder="password" />
                    <input type="submit" value={'Register'} />
                </form>
            }
        </div>
    )
}

export default Register

