import Home from "../pages/home";
import Move from "../pages/move";
import NotFound from '../pages/notFound';

// private
export const routes = [
    {
        path: '/',
        key: 'home',
        component: () => <Home />,
    },
    {
        path: '/move-task',
        key: 'move',
        component: () => <Move />,
    },
    {
        path: '*',
        key: 'notFound',
        component: () => <NotFound />,
    },
]

// public