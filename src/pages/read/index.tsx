import SvgIcon from "@/components/SvgIcon";
import { useTranslation } from "react-i18next";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
export default function Read() {
    const { t } = useTranslation()
    return (
        <div>
            <div className="flex items-center px-[15px] py-[8px] shadow-lg">
                <span className="flex items-center px-[10px] rounded-full text-sm py-[8px] cursor-pointer hover:bg-[#ceced3]">
                    <SvgIcon name="directory" width={20}></SvgIcon>
                    <span className="ml-[5px]">{ t('read_page.header.read_assistant') }</span>
                </span>
                <div className="flex items-center">
                    <Popover>
                        <PopoverTrigger>Open</PopoverTrigger>
                        <PopoverContent>Place content for the popover here.</PopoverContent>
                    </Popover>
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <SvgIcon name="ai-brain" width={50}></SvgIcon>
                </div>
            </div>

        </div>
    )
}
