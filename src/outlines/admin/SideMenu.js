import { NavLink } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const SideMenu = () => {
  const [t] = useTranslation();

  return (
    <aside>
      <NavLink
        to="/admin/config"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('사이트 설정')}
      </NavLink>
      <NavLink to="/admin/member">{t('회원관리')}</NavLink>
    </aside>
  );
};

export default React.memo(SideMenu);
