import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllBabyDoll from "../pages/AllBabyDoll/AllBabyDoll";
import MyDoll from "../pages/MyDoll/MyDoll";
import AddNewDoll from "../pages/AddNewDoll/AddNewDoll";
import Blogs from "../pages/Blogs/Blogs";


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
                element: <AllBabyDoll></AllBabyDoll>
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
            }
        ]
    }
])

export default router;