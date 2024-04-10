import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import CertificatePage from "./pages/CertificatePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                },
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
                {
                    path: "/certificate",
                    element: <CertificatePage />
                },
            ]
        },
    ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
