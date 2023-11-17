import { useTranslation } from 'react-i18next';
import { SubTitle } from '../commons/TitleStyle';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { ButtonGroup, BigButton } from '../commons/ButtonStyle';
import { InputText } from '../commons/InputStyle';
import styled from 'styled-components';
import sizeName from '../../styles/sizes';
import React from 'react';
import loadable from '@loadable/component';

const { small, medium, big } = sizeName;
const ErrorMessages = loadable(() => import('../commons/ErrorMessages'));

const FormBox = styled.form`
  dl {
    display: flex;
    padding: 10px 15px;
    align-items: center;
  }
  dl:last-of-type {
    margin-bottom :15px;
  }
  dt {
    width: 130px;
    font-size: ${medium}
    font-weight: bold;
  }
  dd {
    flex-grow: 1;
  }
  dl + dl {
    border-top: 1px solid #d5d5d5;
  }
  .terms {
    border: 1px solid #d5d5d5;
    height: 150px;
    padding: 10px;
    overflow: auto;
    font-size: ${small};
  }

  .agree_terms {
    text-align: center;
    font-size: ${medium}
    cursor: pointer;
    margin: 5px 0 10px;
    svg {
        font-size: ${big}
        vertical-align: middle;
    }
  }
`;

const JoinFrom = ({ onSubmit, onChange, onToggle, form, errors }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit}>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputText
            type="text"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="email" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputText
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="password" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호 확인')}</dt>
        <dd>
          <InputText
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="confirmPassword" />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputText
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="name" />
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <InputText
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="mobile" />
        </dd>
      </dl>
      <SubTitle align="center" border_width={1}>
        {t('회원가입약관')}
      </SubTitle>
      <pre className="terms">
        {/* pre: 줄 개행 인식 태그 */}
        회원가입 약관 내용
      </pre>
      <div className="agree_terms" onClick={onToggle}>
        {form.agree ? <FiCheckSquare /> : <FiSquare />}
        {t('회원 약관에 동의합니다.')}
      </div>
      <ErrorMessages errors={errors} field="agree" />
      <ButtonGroup>
        <BigButton
          type="submit"
          color="black"
          bcolor="black"
          height="45px"
          size="medium"
        >
          {t('가입하기')}
        </BigButton>
        <BigButton
          type="reset"
          color="white"
          bcolor="black"
          height="45px"
          size="medium"
          fcolor="black"
        >
          {t('다시입력')}
        </BigButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(JoinFrom);
