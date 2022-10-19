import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import FullLayout from 'container/FullLayout/Layout';
import { lazy } from 'react';

const UserListPage = lazy(() => import('pages/userList'));
const UserInfoPage = lazy(() => import('pages/userInfo'));

export default function USER_PATH(isAuth: boolean): RouteObject[] {
  return [
    {
      path: '/users',
      element: isAuth ? <FullLayout /> : <Navigate to="/" replace />,
      children: [
        { path: 'user-list', element: <UserListPage /> },
        { path: 'user-list/:userId', element: <UserInfoPage /> },
      ],
    },
  ];
}
