import axios from '@/utils/axios';

let base=process.env.REACT_APP_BAR;

export const postRequest = params => { return axios.post(`${base}/moxIntlBlackGround/customer/getList`, params); };

export const StatisticsHistroy = params => { return axios.get(`${base}/OpenStatistics/getHistroy`, { params: params }); };