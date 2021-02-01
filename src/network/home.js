import { request } from './request'
export function getCarousel() {
    return request({
        url: '/getlunbo',
        // method: 'get'
    })
}