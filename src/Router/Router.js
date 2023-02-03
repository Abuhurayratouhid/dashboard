import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        
    }
])


export default router;