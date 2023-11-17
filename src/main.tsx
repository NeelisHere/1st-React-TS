import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeContextProvider } from "./Providers/ThemeContextProviders.tsx";
import { Provider } from "react-redux";
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeContextProvider>,
)
