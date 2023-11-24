import Main from './pages/front/Main';
import Login from './pages/front/member/Login';
import Join from './pages/front/member/Join';
import NotFound from './pages/commons/NotFound';
import FrontLayout from './layouts/front/CommonLayout';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './modules/User';

const App = () => {
  const {
    action: { updateUserInfo },
  } = useContext(UserContext);
  updateUserInfo();
  return (
    <Routes>
      <Route path="/" element={<FrontLayout />}>
        <Route index element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
