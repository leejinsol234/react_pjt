import apiRequest from '../../lib/apiRequest';
import cookies from 'react-cookies';

/* 로그인 요청API - 성공 시 토큰 발급 */
export const requestLogin = (form) =>
  new Promise((resolve, reject) => {
    apiRequest('/member/token', 'POST', form)
      .then((res) => {
        if (res.data.success) {
          //로그인 성공 시 JWT 변환
          resolve(res.data.data);
        } else {
          //실패 시 에러메세지
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

/* 로그인 회원 정보 조회 */
export const getUserInfo = () =>
  new Promise((resolve, reject) => {
    apiRequest('/member/info')
      .then((res) => {
        if (res.data.success) {
          //로그인 상태인 경우 회원정보 반환
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        //토큰이 만료된 경우므로 삭제 처리
        cookies.remove('token');
        reject(err);
      });
  });
