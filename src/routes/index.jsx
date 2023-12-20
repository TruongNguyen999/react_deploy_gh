import Home from "../pages/home";
import Move from "../pages/move";
import NotFound from '../pages/notFound';

// private
export const routes = [
    {
        path: `${process.env.REACT_APP_URL_ENDPOINT_DEV}/`,
        key: 'home',
        component: () => <Home />,
    },
    {
        path: `/${process.env.REACT_APP_URL_ENDPOINT_DEV}/move-task`,
        key: 'move',
        component: () => <Move />,
    },
    {
        path: `*`,
        key: 'notFound',
        component: () => <NotFound />,
    },
]

// public