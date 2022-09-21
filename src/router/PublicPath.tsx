import FullLayout from 'components/layout/FullLayout';
import LoginPage from 'pages/login';
import { RouteObject } from 'react-router';

interface RotuerPathType {
  layout?: React.ReactNode;
  children?: RouteObject[];
}

const routes = (): Array<RotuerPathType> => [
  {
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
    ],
  },
];
export default routes;
