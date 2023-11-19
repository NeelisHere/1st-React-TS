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
                    <h3>Currently logged user</h3>
                    <p><b><u>username</u>: </b>{ loggedInUser.username }</p>
                    <p><b><u>email</u>: </b>{ loggedInUser.email }</p> 
                </div>
                : 
                <p>Loading...</p>
            }
        </div>
    )
}

export default User
