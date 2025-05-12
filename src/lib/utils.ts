import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function deepClone() {

}
//get File type ex: application/pdf ===> pdf
export function getFileType(type: String, isToUpper: boolean = true): string {
    let fileType = type.split('/')
    let category = ''
    if (fileType.length > 1) {
        category = fileType[1]
    } else {
        category = fileType[0]
    }
    return isToUpper ? category.toUpperCase() : category
}

export function creatFileKey(file: File) {
    return `${file.name}_${file.size}_${file.type}_${file.lastModified}`;
}
// array unique and return uniqueList & duplicateList
export function uniqueArray<T>(list: T[], attr: keyof T): {
    uniqueList: T[],
    duplicateList: T[]
} {
    const seen = new Set<any>();
    let duplicateList: T[] = []
    const uniqueList = list.filter(item => {
        const key = item[attr];
        if (seen.has(key)) {
            duplicateList.push(item)
            return false
        } else {
            seen.add(key)
        }
        return true
    })
    return {
        uniqueList,
        duplicateList
    }
}