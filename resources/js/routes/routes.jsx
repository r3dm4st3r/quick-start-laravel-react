import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import ErrorPage from '@/components/common/ErrorPage';
import Home from '@/pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default routes;
