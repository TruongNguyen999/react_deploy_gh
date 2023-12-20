import Home from "../pages/home";
import Move from "../pages/move";
import NotFound from '../pages/notFound';

const urlPath = 'react_deploy_gh'

// private
export const routes = [
    {
        path: `${urlPath}/`,
        key: 'home',
        component: () => <Move />,
    },
    {
        path: `${urlPath}/move-task`,
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