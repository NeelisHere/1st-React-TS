import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserContextProvider from "./Providers/UserProvider.tsx";
import { Provider } from "react-redux";
import store from './store.ts';
import TaskContextProvider from './Providers/TaskProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserContextProvider>
        <Provider store={store}>
            <TaskContextProvider>
                <App />
            </TaskContextProvider>
        </Provider>
    </UserContextProvider>,
)
