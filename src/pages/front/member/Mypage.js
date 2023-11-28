import MemberOnly from '../../../components/authority/MemberOnly';

const MyPage = () => {
  return (
    <MemberOnly>
      <h1>마이페이지</h1>
    </MemberOnly>
  );
};

export default MyPage;
