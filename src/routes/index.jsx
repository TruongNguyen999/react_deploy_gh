import Home from "../pages/home";
import Move from "../pages/move";
import NotFound from '../pages/notFound';

let pathENV = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_URL_ENDPOINT_DEV : process.env.REACT_APP_URL_ENDPOINT_PRO

// private
export const routes = [
    {
        path: `/${pathENV}`,
        key: 'home',
        component: () => <Home />,
    },
    {
        path: `/${pathENV}/move-task`,
        key: 'move',
        component: () => <Move />,
    },
    {
        path: `/${pathENV}/*`,
        key: 'notFound',
        component: () => <NotFound />,
    },
]

// public