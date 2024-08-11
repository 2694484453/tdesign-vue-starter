import axios from "axios";

/**
 * 登录
 * @param form
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function login(form) {
  const params = {
    userName: form.account,
    passWord: form.password
  }
  return axios.post('/api/login', params);
}
