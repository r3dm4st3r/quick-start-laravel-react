import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Loading from '@/components/common/Loading';

const AppLayout = () => (
  <>
    <Header />
    <main role="main" className="min-h-[calc(100vh-117px)] relative">
      <Loading />
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AppLayout;
