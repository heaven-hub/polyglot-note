import { Outlet } from "react-router-dom";
import Header from '@/components/Header'
const Layout = () => {
    return (
        <div>
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
