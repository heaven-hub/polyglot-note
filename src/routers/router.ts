
import { createBrowserRouter } from 'react-router-dom';
import Library from '@/pages/library'
import Upload from '@/pages/upload'
import Setting from '@/pages/setting'
import NotFound from '@/pages/notFound/index'
import Layout from '@/components/Layout'
import Read from '@/pages/read/index'
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'

/**
 * router Doc https://reactrouter.com/start/data/custom
 */

let router = createBrowserRouter([
    {
        path: "/",
        Component: Layout, // 所有页面共用 Layout
        children: [
            { index: true, Component: Library },
            {
                path: 'library',
                Component: Library,
            },
            {
                path: 'upload',
                Component: Upload,
            },
            {
                path: 'setting',
                Component: Setting,
            },
            {
                path: 'read',
                Component: Read,
            },
        ],
    },
    {
        path: 'login',
        Component: Login,
    },
    {
        path: 'register',
        Component: Register,
    },
    {
        path: "*", // 捕获所有未知路由
        Component: NotFound,
    }
]);

export default router