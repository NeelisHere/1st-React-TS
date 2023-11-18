import { useForm, SubmitHandler } from "react-hook-form"
import { useMemo, useState } from 'react'
import axiosAuthService from '../utils/authAPI'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


const Login = () => {
    const { register, handleSubmit } = useForm<LoginFormValues>()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        try {
            setLoading(true)
            const { data: apiResponse } = await axiosAuthService.loginAPI(data)
            toast.success(apiResponse.message)
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error('Error logging in user!')
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
            <h1>Login</h1>
            {
                loading?
                <>Loading...</>
                :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('username')} placeholder="username" />
                    <input type="password" {...register('password')} placeholder="password" />
                    <input type="submit" value={'Login'} />
                </form>
            }
        </div>
    )
}

export default Login
