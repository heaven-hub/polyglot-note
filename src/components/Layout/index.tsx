import { Outlet,useLocation,Navigate } from "react-router-dom";
import Header from '@/components/Header';
import { getToken } from '@/utils/cookies';

const Layout = () => {
    const location = useLocation();
    const token = getToken();
    if (!token) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }
    return (
        <div key={location.pathname}>
            {/* 全局 Header */}
            <Header></Header>
            {/* 主体内容 */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
