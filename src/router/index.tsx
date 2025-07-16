import { Dashboard } from "@/pages/Dashboard";
import { History } from "@/pages/History";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
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
