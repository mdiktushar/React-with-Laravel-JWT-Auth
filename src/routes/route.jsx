import { createBrowserRouter } from "react-router-dom";
import Layout_Main from "../layouts/Layout_Main";
import Login from "../pages/auth/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register";

const router = createBrowserRouter([
    {
        path: `/`,
        element: <Layout_Main />,
        children: [ 
            {
                path: `/`,
                element: <Home />
            },
            {
                path: `login`,
                element: <Login />
            },
            {
                path: `register`,
                element: <Register />
            }
        ],

    }
]);

export default router;