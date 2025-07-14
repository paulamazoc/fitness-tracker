import { Dashboard } from "@/pages/Dashboard";
import { History } from "@/pages/History";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/history',
        element: <History />,
    },
]);

export const AppRouter = () => <RouterProvider router={router} />
