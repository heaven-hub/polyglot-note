import { useTranslation, Trans } from "react-i18next";
import SvgIcon from "@/components/SvgIcon";
import { useState, DragEvent, ChangeEvent,useEffect } from "react";
import { getFileType, creatFileKey } from '@/lib/utils'
import ErrorFileDialog from "./error-file-dialog";
import FileCard from "./fileCard";
import { MyFile } from './type'
export default function Index() {
    const { t } = useTranslation()
    const [fileList, setFileList] = useState<MyFile[]>([])
    const [errFileList, setErrFileList] = useState<MyFile[]>([])
    const [visible,setVisible] = useState(true)
    const dealWithFiles = (files: MyFile[]) => { // 大於50M 的文件剔除
        // files = files.map(item=>{
        //     let suitableSize = item.size
        // })
        console.log('files', files)
        setFileList((pre: MyFile[]) => {
            let { uniqueList, duplicateList } = uniqueFiles([...pre, ...files])
            return uniqueList
        })
    }
    const uniqueFiles = (files: MyFile[]): {
        uniqueList: MyFile[],
        duplicateList: MyFile[]
    } => {
        const seen = new Set<any>();
        let duplicateList: MyFile[] = []
        let uniqueList = files.filter(item => {
            if (!item.fileKey) {
                item.fileKey = creatFileKey(item)
            }
            if (seen.has(item.fileKey)) {
                duplicateList.push(item)
                return false
            } else {
                return true
            }
        })
        return {
            uniqueList,
            duplicateList
        }
    }
    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length > 0) {
            dealWithFiles(files)
        }
    }
    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            dealWithFiles(files)
        }
    };

    const onDialogVisibleChange = ()=>{
        setVisible((val)=>!val)
    }
    return (
        <div className="px-[3%] py-[4%]">
            <ErrorFileDialog visible={visible} errFileList={errFileList}></ErrorFileDialog>
            <h1 className="text-center text-4xl">{t('upload_page.header')}</h1>
            <div id="upload-box" className="mt-[25px] bg-[#eee] rounded-lg px-[15px] py-[10px]">
                <div className="flex items-center leading-[24px] text-[#666]">
                    <span><SvgIcon name="upload" /></span>
                    {t('upload_page.upload_local_doc')}
                </div>
                <label htmlFor="upload-input" onDragOver={handleDragOver} onDrop={handleDrop} id="upload-area" className="flex justify-between text-[#b2b2b2] flex-col cursor-pointer m-[5px] p-[10px] border-[2px] border-[#b2b2b2] border-dashed rounded-lg min-h-[300px]">
                    <ul className="flex flex-wrap">
                        {
                            fileList.map(item => {
                                return <FileCard item={item}></FileCard>
                            })
                        }
                    </ul>
                    <div className="flex flex-col items-center mb-[25px]">
                        <span className="text-center"><SvgIcon name="file" width={50} height={50} /></span>
                        <div className="mt-[20px]">
                            <Trans i18nKey="upload_page.upload_local_drog" components={{ a: <a className="hover:underline text-[#6059f0]" /> }} />
                            <p className="text-xs mt-[15px]">{t('upload_page.upload_local_drog.desc')}</p>
                        </div>
                    </div>
                </label>
                <input id="upload-input" multiple onChange={onFileChange} type="file" accept=".pdf" className="hidden" />
            </div>
        </div>
    )
}
