import { ReactNode } from 'react';
import FullLayout from 'components/layout/FullLayout';
import AccountListPage from 'pages/accountList';
import AccountInfoPage from 'pages/accountInfo';
import UserInfoPage from 'pages/userInfo';
import UserListPage from 'pages/userList';
import { RouteObject } from 'react-router';

interface RotuerPathType {
  key?: string;
  layout?: ReactNode;
  children?: RouteObject[];
}

const routes = (): Array<RotuerPathType> => [
  {
    layout: <FullLayout />,
    children: [
      {
        path: '/accounts/account-list/',
        element: <AccountListPage />,
      },
      {
        path: '/accounts/account-list/:accountId',
        element: <AccountInfoPage />,
      },
      {
        path: '/users/user-list',
        element: <UserListPage />,
      },
      {
        path: '/users/user-list/:userId',
        element: <UserInfoPage />,
      },
    ],
  },
];
export default routes;
