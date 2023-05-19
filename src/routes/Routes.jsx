import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllBabyDoll from "../pages/AllBabyDoll/AllBabyDoll";
import MyDoll from "../pages/MyDoll/MyDoll";
import AddNewDoll from "../pages/AddNewDoll/AddNewDoll";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


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
                path: '/allbabydolls',
                element: <AllBabyDoll></AllBabyDoll>,
                loader: () => fetch('http://localhost:5000/alldolls')
            },
            {
                path: '/mydolls',
                element: <MyDoll></MyDoll>
            },
            {
                path: '/addnewdoll',
                element: <AddNewDoll></AddNewDoll>
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
            }
        ]
    }
])

export default router;