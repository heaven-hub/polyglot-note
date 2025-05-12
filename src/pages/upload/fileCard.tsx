
import SvgIcon from "@/components/SvgIcon";
import { MyFile } from './type'
import { getFileType } from '@/lib/utils'
const IconStateComponent = (file: MyFile | null) => {
    if (!file) {
        return null
    } else if (file.isLarge) {
        return <div className="bg-danger p-[10px] cursor-pointer rounded-full shadow-lg text-white"><SvgIcon name="close"></SvgIcon></div>
    } else if (file.isErrored) {
        return <div className="bg-danger p-[10px] cursor-pointer rounded-full shadow-lg text-white"><SvgIcon name="refresh"></SvgIcon></div>
    } else {
        return <div className="bg-[#6059f0] p-[10px] cursor-pointer rounded-full shadow-lg text-white"><SvgIcon name="book"></SvgIcon></div>
    }
}
type Props = {
    item: MyFile
}
export default function FileCard({ item }: Props) {
    return (
        <li onClick={(event) => { event.preventDefault(); }} key={item.fileKey} className="flex justify-between cursor-text items-center bg-[#fff] min-w-xs mt-[15px] mr-[15px] md:w-[32%] lg:w-[48%] xl:w-[32%] rounded-lg p-[8px]">
            <div className="w-[85%]">
                <div className="text-base text-[#333] leading-[24px] h-[48px] text-left line-clamp-2 ">fdaddfaad發多少打發打發打發地方大方法的多發發打發打發打發打發阿打發dfadfadffdafdaadfaddfdfsdffdafa法大大方法打發阿德防守打法放大adfdfdfdfdfadfdfadfdafdfs</div>
                <div className="">
                    <span>{getFileType(item.type)}</span>
                </div>
            </div>
            <div>{IconStateComponent(item)}</div>
        </li>
    )
}
