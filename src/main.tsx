import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserContextProvider from "./Providers/UserProvider.tsx";
import { Provider } from "react-redux";
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </UserContextProvider>,
)
