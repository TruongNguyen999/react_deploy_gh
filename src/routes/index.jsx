import Home from "../pages/home";
import Move from "../pages/move";
import NotFound from '../pages/notFound';

// private
export const routes = [
    {
        path: `${process.env.PUBLIC_URL}/`,
        key: 'home',
        component: () => <Home />,
    },
    {
        path: `${process.env.PUBLIC_URL}/move-task`,
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