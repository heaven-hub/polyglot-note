import Cookies from 'js-cookie';
import config from '@/config/index'
const domain = config.domain
export function getCookie(name:string){
    return Cookies.get(name) || ''
}

export function setCooike(name:string,value:any,expires=7){
    Cookies.set(name, value, {
        // path: '/',
        domain,
        expires
    })
}

export function getToken(){
    return Cookies.get('token') || ''
}

export function clearCookie(name:string){
    Cookies.remove(name)
}
export function clear(){
    // TODO Cookies()
}