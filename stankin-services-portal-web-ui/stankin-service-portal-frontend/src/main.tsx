import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [{
                path: "/auth",
                element: <LoginPage />
            }]
        },
    ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
