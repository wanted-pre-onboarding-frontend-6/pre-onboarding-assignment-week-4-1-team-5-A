import AccountListPage from 'pages/accountList';
import AccountInfoPage from 'pages/accountInfo';
import UserListPage from 'pages/userList';
import { RouteObject } from 'react-router';
import PrivateRoute from 'router/PrivateRoute';
import FullLayout from 'container/FullLayout/FullLayout';
import UserInfoPage from 'pages/userInfo';

export const PRIVATE_PATH: RouteObject[] = [
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <FullLayout />,
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
    ],
  },
];
