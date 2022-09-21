import { ReactNode } from 'react';
import FullLayout from 'components/layout/FullLayout';
import AccountInfoPage from 'pages/accointInfo';
import AccountListPage from 'pages/accountList';
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
        path: '/account-list/',
        element: <AccountListPage />,
      },
      {
        path: '/account-list/:accountId',
        element: <AccountInfoPage />,
      },
      {
        path: '/user-list',
        element: <UserListPage />,
      },
      {
        path: '/user-list/:userId',
        element: <UserInfoPage />,
      },
    ],
  },
];
export default routes;
