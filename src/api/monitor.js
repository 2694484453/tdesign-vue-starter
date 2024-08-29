import axios from "axios";

/**
 * 登录
 * @param form
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function list(form) {
  const params = {
    userName: form.account,
    passWord: form.password
  }
  return axios.get('/api/monitor/list', params);
}
