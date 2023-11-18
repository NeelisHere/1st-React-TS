import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditTask from "./components/EditTask";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";

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
		path: "/auth/login",
		element: <Login />,
	},
	{
		path: "/auth/register",
		element: <Register />,
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
};

export default App;
