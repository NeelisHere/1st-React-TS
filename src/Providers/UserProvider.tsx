import { ReactNode, createContext, useState, useContext } from "react";

const UserContext = createContext<UserContextType|null>(null)

export const LoggedInUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}

const UserContextProvider = ({ children }:{ children: ReactNode }) => {
    const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null)

    return(
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider