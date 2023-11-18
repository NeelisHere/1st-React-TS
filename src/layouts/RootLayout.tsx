import { useMemo } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {

    const rootLayoutStyle = useMemo(() => {
        return { 
            border: '2px solid black', 
            padding: '5px',
            width: '100%',
            height: '100vh', 
        }
    }, [])

    return (
        <div style={rootLayoutStyle}>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout
