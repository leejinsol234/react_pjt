import LoginContainer from '../../containers/member/LoginContainer';
import UserContext from '../../modules/User';
import { useContext } from 'react';

const Main = () => {
  const {
    state: { isLogin, userInfo },
    action: { setIsLogin, setUserInfo },
  } = useContext(UserContext);

  const handleClick = () => {
    setIsLogin(true);
    setUserInfo({ userNm: '이이름' });
  };

  return isLogin ? (
    <h1>메인페이지... / {userInfo.userNm}</h1>
  ) : (
    <>
      <LoginContainer />
      <button type="button" onClick={handleClick}>
        로그인 하기
      </button>
    </>
  );
};

export default Main;
//render props 문법: Provider에서 받아온 전역 상태값(value)을 Consumer에서 함수로 사용하기
//예:
// const TestComponent = ({ children }) => {
//  const value={is.Login:false}
//  return children(value);
// };
