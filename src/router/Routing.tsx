import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Path";

const Routing = () => {
  const routing = routes();
  return (
    <BrowserRouter>
      <Routes>
        {routing.map(({ auth, element, children }, index) => {
          return auth ? (
            <Route element={element} key={index}>
              {children?.map(({ element, children }, index) => {
                return (
                  <Route element={element} key={index}>
                    {children?.map(({ path, element }) => {
                      return <Route path={path} element={element} key={path} />;
                    })}
                  </Route>
                );
              })}
            </Route>
          ) : (
            children?.map(({ element, children }, index) => {
              return (
                <Route element={element} key={index}>
                  {children?.map(({ path, element }) => {
                    return <Route path={path} element={element} key={path} />;
                  })}
                </Route>
              );
            })
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
