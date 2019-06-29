import axios from '../libs/ajaxRequest';

export const getUser = ()=>{
    return axios.request({
        url:'/user',
        methods:'get'
    })
}
