import FullLayout from 'container/FullLayout/FullLayout';
import LoginPage from 'pages/login';
import { RouteObject } from 'react-router';

export const PUBLIC_PATH: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    element: <FullLayout />,
    children: [],
  },
];
