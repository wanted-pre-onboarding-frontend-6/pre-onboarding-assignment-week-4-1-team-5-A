import FullLayout from "components/layout/FullLayout";
import AccountInfoPage from "pages/accointInfo";
import AccountListPage from "pages/accountList";
import LoginPage from "pages/login";
import UserInfoPage from "pages/userInfo";
import UserListPage from "pages/userList";
import PrivateRoute from "./PrivateRoute";
import { RouteObject } from "react-router";

interface RotuerPathType {
  auth: boolean;
  key?: string;
  element?: React.ReactNode;
  children?: RouteObject[];
}

const routes = (): Array<RotuerPathType> => [
  {
    auth: true,
    element: <PrivateRoute />,
    key: "private",
    children: [
      {
        element: <FullLayout />,
        children: [
          {
            path: "/account-list/",
            element: <AccountListPage />,
          },
          {
            path: "/account-list/:accountId",
            element: <AccountInfoPage />,
          },
          {
            path: "/user-list",
            element: <UserListPage />,
          },
          {
            path: "/user-list/:userId",
            element: <UserInfoPage />,
          },
        ],
      },
    ],
  },
  {
    auth: false,
    children: [
      {
        element: <FullLayout />,
        children: [
          {
            path: "/",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
];
export default routes;
