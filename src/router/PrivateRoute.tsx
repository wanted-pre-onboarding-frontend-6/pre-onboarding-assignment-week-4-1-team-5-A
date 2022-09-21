import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // login auth : redirect "/"
  // return <Outlet /> : <Navigate to="/" />;
  return <Outlet />;
};
export default PrivateRoute;
