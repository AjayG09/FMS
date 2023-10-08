import { RouteObject } from 'react-router-dom';
import Root from './modules/_common/Root/Root';
import Error from './modules/_common/Error/Pages/ErrorPage/ErrorPage';
import AuthRoutes from './modules/Auth/AuthRoutes';
import ReportRoutes from './modules/_common/Reports/ReportRoutes';
const routes: RouteObject[] = [
  {
    children: [...AuthRoutes, ...ReportRoutes],
    element: <Root />,
    errorElement: <Error />,
    path: '/',
  },
];

export default routes;
