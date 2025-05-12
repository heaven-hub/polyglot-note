import { Outlet,useLocation } from "react-router-dom";
import Header from '@/components/Header'
const Layout = () => {
    const location = useLocation();
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
