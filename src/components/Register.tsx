import { useForm, SubmitHandler } from "react-hook-form"
import { useMemo, useState } from 'react'
import axiosAuthService from '../utils/authAPI'
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"
import { LoggedInUser } from "../Providers/UserProvider"

const Register = () => {
    const { register, handleSubmit } = useForm<RegisterFormValues>()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { setLoggedInUser } = LoggedInUser()

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        try {
            setLoading(true)
            const { data: res } = await axiosAuthService.registerAPI(data)
            toast.success('User registered successfully!')
            setLoggedInUser(res.user)
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error('Error registering user!')
        } finally {
            setLoading(false)
        }
    }
    const boxStyles = useMemo(() => {
        const flexDirection: { 
            flexDirection: FlexDirection 
        } = {flexDirection: 'column' }
        return {
            border: '2px solid black',
            padding: '10px',
            width: '500px',
            margin:'0 auto',
            display: 'flex',
            ...flexDirection
        }
    }, [])
    const formStyles = useMemo(() => {
        const flexDirection: { 
            flexDirection: FlexDirection 
        } = {flexDirection: 'column' }
        return {
            padding: '10px',
            width: '100%',
            display: 'flex',
            ...flexDirection
        }
    }, [])

    return (
        <div style={boxStyles}>
            <h1>Register</h1>
            {
                loading?
                <>Loading...</>
                :
                <form 
                    style={formStyles}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="text" {...register('username')} placeholder="username" />
                    <input type="email" {...register('email')} placeholder="email" />
                    <input type="password" {...register('password')} placeholder="password" />
                    <br />
                    <input type="submit" value={'Register'} />
                </form>
            }
            <p>
                Already have an account? 
                <Link to={'/auth/login'}>Login</Link>
            </p>
        </div>
    )
}

export default Register

