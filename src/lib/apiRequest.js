import axios from 'axios';
import cookies from 'react-cookies';

export default function apiRequest(
  url,
  method = 'GET',
  data = null,
  headers = null,
) {
  //기본값 설정: method = 'GET',data: 요청 데이터
  //http://localhost:3001/api/v1 고정(env에서 가져옴)
  //정규표현식 시작: //
  if (!/^http[s]?/i.test(url)) {
    //외부api인 경우 http(s)로 시작, 내부 api인 경우에는 localhost:3001로 고정(요청url설정)
    url = process.env.REACT_APP_API_URL + url;
    //외부 url이 들어오는 경우가 아니면 env에서 가져온 url을 사용한다.
  }

  //요청 데이터가 있고, method가 GET방식이면 쿼리스트링으로 변환
  if (method.toUpperCase() === 'GET' && data) {
    const searchParams = new URLSearchParams(data); //키와 값 형태의 쿼리 스트링으로 변환
    url += `?${searchParams.toString()}`; //변환해서 전달한다.
    data = null;
  }

  const token = cookies.load('token');
  if (token) {
    headers = headers || {};
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    //요청 메서드
    method,
    url,
    data,
    headers,
    validateStatus: (state) => state < 500, //500 이하 오류일 때는 (400대의 데이터 검증 등) 정상 동작하도록
  });
}
