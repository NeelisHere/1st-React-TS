import { useMemo } from "react"
import { Outlet } from "react-router-dom"


const RootAuthLayout = () => {
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
            <Outlet />
        </div>
    )
}

export default RootAuthLayout
