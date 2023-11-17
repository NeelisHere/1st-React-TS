import ToggleTheme from "./components/ToggleTheme";
import Counter from "./components/Counter";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditTask from "./components/EditTask";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AllTasks />,
	},
	{
		path: "/create",
		element: <CreateTask />,
	},
	{
		path: "/edit/:taskId",
		element: <EditTask />,
	},
	{
		path: "/counter",
		element: <Counter />,
	},
	{
		path: "/toggle-theme",
		element: <ToggleTheme />,
	},
]);

const App = () => {
	return (
		<RouterProvider router={router} />
	);
};

export default App;
