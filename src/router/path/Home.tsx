import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
const LoginPage = lazy(() => import('pages/login'));

export default function HOME_PATH(isAuth: boolean): RouteObject[] {
  return [
    {
      path: '/',
      element: isAuth ? <Navigate to="/accounts/account-list" replace /> : <LoginPage />,
    },
  ];
}
