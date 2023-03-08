import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Housing from "./Pages/Housing/Housing";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import "./index.css";

//création des routes
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