import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import FullLayout from 'container/FullLayout/Layout';
import { lazy } from 'react';

const AccountListPage = lazy(() => import('pages/accountList'));
const AccountInfoPage = lazy(() => import('pages/accountInfo'));

export default function ACCOUNT_PATH(isAuth: boolean): RouteObject[] {
  return [
    {
      path: '/accounts',
      element: isAuth ? <FullLayout /> : <Navigate to="/" replace />,
      children: [
        { path: 'account-list', element: <AccountListPage /> },
        { path: 'account-list/:accountId', element: <AccountInfoPage /> },
      ],
    },
  ];
}
