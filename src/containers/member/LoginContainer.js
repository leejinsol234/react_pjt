import LoginForm from '../../components/member/LoginForm';
import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../modules/User';
import { requestLogin } from '../../api/member/login';

const LoginContainer = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    action: { updateUserInfo },
  } = useContext(UserContext);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let hasError = false;
      const _errors = {};
      setErrors(() => _errors);

      /* 필수항목 검증S */
      const requiredFields = {
        email: t('NotBlank_email'),
        password: t('NotBlank_password'),
      };

      for (const field in requiredFields) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = requiredFields[field];
          hasError = true;
        }
      }
      /* 필수항목 검증E */

      if (hasError) {
        setErrors(() => _errors);
        return;
      }

      //로그인 처리
      requestLogin(form)
        .then((token) => {
          //JWT -> 쿠키에 저장
          cookies.save('token', token, {
            path: '/',
          });

          //양식 초기화
          setForm(() => {});

          //로그인 상태(isLogin -> true), userInfo에 회원정보 업데이트
          updateUserInfo();

          //페이지 이동
          navigate('/', { replace: true }); //기록 없이 이동
        })
        .catch(() => {
          setErrors(() => ({
            global: t('Login_fail'),
          }));
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget; //값을 유지할 수 있게 담아준다

    setForm((form) => ({
      ...form,
      [target.name]: target.value,
    }));
  }, []);

  return (
    <>
      <LoginForm onChange={onChange} onSubmit={onSubmit} errors={errors} />
    </>
  );
};

export default React.memo(LoginContainer);
