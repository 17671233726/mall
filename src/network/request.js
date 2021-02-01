import axios from "axios"
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://api.cms.liulongbin.top/api',
        timeout: 5000
    })
    return instance(config)
}