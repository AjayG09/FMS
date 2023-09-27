import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Login = lazy(() => import('./Pages/Login/Login'));

const AuthRoutes: RouteObject[] = [
    {
      element: (
        <Suspense fallback={<Loading isLoading />}>
          <Login />
        </Suspense>
      ),
      path: '/login'
    },
]


export default AuthRoutes;
