import { useMemo } from "react"
import { LoggedInUser } from "../Providers/UserProvider"

const User = () => {
    const { loggedInUser } = LoggedInUser()
    const userCardStyle = useMemo(() => {
        return {
            border: '2px solid red',
            padding: '5px',
        }
    }, [])

    return (
        <div style={userCardStyle}>
            {
                loggedInUser? 
                <div>
                    <p>{ loggedInUser.username }</p>
                    <p>{ loggedInUser.email }</p> 
                </div>
                : 
                <p>Loading...</p>
            }
        </div>
    )
}

export default User
