import apiRequest from '../../lib/apiRequest';

export default function requestJoin(form) {
  return new Promise((resolve, reject) => {
    apiRequest('/member', 'POST', form)
      .then((res) => {
        //성공 시 json데이터로 응답이 온다.
        if (!res.data.success) {
          reject(res.data); //메세지 전달
        } else resolve(true);
      })
      .catch((err) => reject(err));
  });
}
