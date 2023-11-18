import { useForm, SubmitHandler } from "react-hook-form"
import { useMemo, useState } from 'react'
import axiosAuthService from '../utils/authAPI'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { LoggedInUser } from "../Providers/UserProvider"
import { Link } from "react-router-dom"

const Login = () => {
    const { register, handleSubmit } = useForm<LoginFormValues>()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { setLoggedInUser } = LoggedInUser()

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        try {
            setLoading(true)
            const { data: res } = await axiosAuthService.loginAPI(data)
            toast.success(res.message)
            setLoggedInUser(res.user)
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error('Error logging in user!')
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
            <h1>Login</h1>
            {
                loading?
                <>Loading...</>
                :
                <form 
                    style={formStyles}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="text" {...register('username')} placeholder="username" />
                    <input type="password" {...register('password')} placeholder="password" />
                    <br />
                    <input type="submit" value={'Login'} />
                </form>
            }
            <p>
                Don't have an account? 
                <Link to={'/auth/register'}>Register</Link>
            </p>
        </div>
    )
}

export default Login
