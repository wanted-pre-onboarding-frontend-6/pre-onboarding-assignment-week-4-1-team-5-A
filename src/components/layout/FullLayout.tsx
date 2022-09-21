import { Outlet } from "react-router-dom";
import styled from "styled-components";

const FullLayout = () => {
  return (
    <FullLayoutWrapper>
      <Outlet />
    </FullLayoutWrapper>
  );
};
export default FullLayout;

const FullLayoutWrapper = styled.div`
  display: flex;
  background-color: red;
  height: 100vh;
`;
