import { useTheme } from "../Providers/ThemeContextProviders";

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()
    return (
        <>
			<button 
				onClick={() => {
					setTheme((prev) => prev === 'dark'? 'light' : 'dark')
				}}
			>
				Toggle
			</button>

			<div>{theme}</div>
		</>
    )
}

export default ToggleTheme
