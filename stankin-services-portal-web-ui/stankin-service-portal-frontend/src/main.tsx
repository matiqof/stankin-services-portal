import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                path: "/auth",
                element: <LoginPage />
                },
                {
                    path: "/module",
                    element: <></>
                },
                {
                    path: "/schedule",
                    element: <></>
                },
                {
                    path: "/practice",
                    element: <></>
                },
                {
                    path: "/service",
                    element: <ServicePage />
                },
            ]
        },
    ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
