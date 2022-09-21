import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoutes from './PrivatePath';
import PraviateRoutes from './PublicPath';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
  const privateRoutes = PraviateRoutes();
  const publicRoutes = PublicRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {/*private */}
        {privateRoutes.map(({ layout, children }) => {
          return (
            <Route element={<PrivateRoute />} key="private">
              <Route element={layout}>
                {children?.map(({ path, element }) => {
                  return <Route path={path} element={element} key={path} />;
                })}
              </Route>
            </Route>
          );
        })}
        {/*public */}
        {publicRoutes.map(({ layout, children }) => {
          return (
            <Route element={layout && layout} key="public">
              {children?.map(({ path, element }) => {
                return <Route path={path} element={element} key={path} />;
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
