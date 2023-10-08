import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Loading from '@/components/Loading/Loading';
import PurchaseOrder from './Pages/PurchaseOrder/PurchaseOrder';

const Report = lazy(() => import('./Report'));

const AuthRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Loading isLoading />}>
        <Report />
      </Suspense>
    ),
    path: '/report',
  },
  {
    element: (
      <Suspense fallback={<Loading isLoading />}>
        <PurchaseOrder />
      </Suspense>
    ),
    path: '/purchase-order-report',
  },
];

export default AuthRoutes;
