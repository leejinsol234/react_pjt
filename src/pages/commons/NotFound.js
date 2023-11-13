import E404 from '../../images/errors/error.png';

const NotFound = () => {
  return (
    <>
      <img src={E404} alt="errorImg" />
      <h1>페이지 없음</h1>
    </>
  );
};

export default NotFound;
