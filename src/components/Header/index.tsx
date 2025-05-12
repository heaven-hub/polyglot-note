import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SvgIcon from '@/components/SvgIcon'
export default function Header() {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const [isShowMenu,setShowMenu] = useState(true)
    const list = [
        { id:'library', router:'/library',label:t('header.item_library') },
        { id:'paper', router:'/upload', label:t('header.item_add_paper')},
        { id:'setting', router:'/setting', label:t('header.item_setting')},
    ]
    return (
        <>
            <div className="flex justify-between items-center bg-black py-[15px] px-[20px]">
                <span className="text-lg text-white">PolyglotNote</span>
                <div className="hidden md:block">
                    <ul className="flex text-white items-center cursor-pointer">
                        {
                            list.map(item=>{
                                return (<li onClick={()=>navigate(item.router)} key={item.id} className="mx-[10px]">{ item.label }</li>)
                            })
                        }
                    </ul>
                </div>
                <div className="block md:hidden">
                    <div onClick={()=>setShowMenu(!isShowMenu)} style={{width:'40px',color:"#fff" }}>
                        <SvgIcon name="menu" />
                    </div>
                </div>
            </div>
            <div className={`transition-[top] duration-500 ease-in-out fixed left-0 bg-black text-white w-full h-full ${
            isShowMenu ? "top-[-100%]" : "top-[0]"}`}>
                <span onClick={()=>setShowMenu(!isShowMenu)}><SvgIcon name="close" /></span>
                dfaadf
            </div>
        </>
    )
}
