import { useTheme } from "./components/Providers";
// import { Dispatch, SetStateAction } from 'react'

// type ThemeType = 'light' | 'dark'
// interface ThemeContextProviderProps {
// 	theme: ThemeType,
// 	setTheme: Dispatch<SetStateAction<ThemeType>>
// }

const App = () => {
	
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
	);
};

export default App;
