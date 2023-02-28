import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Housing from "./Components/Housing/Housing";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/", element: <Home />
	},
	{
		path: "/housing/:id", element: <Housing />
	},
	{
		path: '/about', element: <About />
	},
	{
		path: "*", element: <PageNotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;