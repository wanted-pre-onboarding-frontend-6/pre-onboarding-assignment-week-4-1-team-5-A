import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  position: relative;
  background-color: ${({ theme }) => theme.palette.mainColor};
`;

export const Header = styled.div`
  width: 100%;
  height: 32px;
  color: ${({ theme }) => theme.palette.subColor};
  display: flex;
  justify-content: space-between;
  padding: 10px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.medium};
    cursor: pointer;
  }
`;
export const Container = styled.div`
  padding: 32px 32px 16px 32px;
`;

export const Input = styled.input`
  background-color: #fff;
  width: 100%;
  height: 32px;
  text-align: center;
  margin: 4px 0;
`;

export const SmallInputBox = styled.div`
  display: flex;
  justify-content: space-between;

  & > input {
    background-color: #fff;
    display: inline;
    width: 48%;
    height: 32px;
    text-align: center;
    margin: 4px 0;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  & > select {
    text-align: center;
    width: 105px;
    background-color: #fff;
  }
`;
