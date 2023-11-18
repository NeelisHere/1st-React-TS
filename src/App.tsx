import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditTask from "./components/EditTask";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import RootLayout from "./layouts/RootLayout";
import RootAuthLayout from "./layouts/RootAuthLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <AllTasks />
			},
			{
				path: "/create",
				element: <CreateTask />,
			},
			{
				path: "/edit/:taskId",
				element: <EditTask />,
			},
		]
	},
	{
		path: "/auth",
		element: <RootAuthLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		]
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster position="bottom-center" />
		</>
	);
};

export default App;
