import Header from '../../outlines/admin/Header';
import { Outlet } from 'react-router-dom';
import AdminOnly from '../../components/authority/AdminOnly';
import SideMenu from '../../outlines/admin/SideMenu';

const CommonLayout = () => {
  return (
    <AdminOnly>
      <Header />
      <main className="admin_page">
        <SideMenu />
        <section>
          <Outlet />
        </section>
      </main>
    </AdminOnly>
  );
};

export default CommonLayout;
