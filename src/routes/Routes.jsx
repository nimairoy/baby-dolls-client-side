import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllBabyDoll from "../pages/AllBabyDoll/AllBabyDoll";
import MyDoll from "../pages/MyDoll/MyDoll";
import AddNewDoll from "../pages/AddNewDoll/AddNewDoll";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DollDetails from "../pages/AllBabyDoll/DollDetails/DollDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../layouts/ErrorPage";
import Update from "../pages/Update/Update";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dolls',
                element: <AllBabyDoll></AllBabyDoll>
            },
            {
                path: '/dolls/:id',
                element: <PrivateRoute><DollDetails></DollDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/dolls/${params.id}`)
            },
            {
                path: '/mydolls',
                element: <PrivateRoute><MyDoll></MyDoll></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/dolls/${params.id}`)
            },
            {
                path: '/addnewdoll',
                element: <PrivateRoute><AddNewDoll></AddNewDoll></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            
            
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;