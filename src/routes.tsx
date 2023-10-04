import { RouteObject } from 'react-router-dom';
import Root from './modules/_common/Root/Root';
import Error from './modules/_common/Error/Pages/ErrorPage/ErrorPage';
import AuthRoutes from './modules/Auth/AuthRoutes';

const routes: RouteObject[] = [
  {
    children: [...AuthRoutes],
    element: <Root />,
    errorElement: <Error />,
    path: '/',
  },
];

export default routes;
