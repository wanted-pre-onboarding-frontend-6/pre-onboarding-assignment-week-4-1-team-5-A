import { useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TokenService from 'services/TokenService';

const PrivateRoute = () => {
  const auth = useRef(TokenService.getToken(process.env.REACT_APP_TOKEN_KEY as string));
  return auth.current ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
