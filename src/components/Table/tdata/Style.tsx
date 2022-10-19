import styled from 'styled-components';

type TrStyleProps = {
  status?: 'red' | 'blue' | 'black';
};

export const Tr = styled.tr<TrStyleProps>`
  & .assets {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  & .assets p {
    color: ${(props) => (props.status === 'red' ? 'red' : 'blue')};
  }

  & textarea {
    width: 100%;
    resize: none;
    font-size: 8px;
    text-align: center;
    height: 20px;
  }

  & button {
    margin: 0 4px;
    background-color: ${({ theme }) => theme.palette.mainColor};
    color: ${({ theme }) => theme.palette.subColor};
    padding: 4px;
    font-size: 10px;
    :hover {
      opacity: 0.8;
    }
  }

  & td {
    border: 1px dotted #bdbdbd;
    border-collapse: collapse;
    padding: 2px;
    text-align: center;
    vertical-align: middle;
  }

  & a {
    color: #3d3da7;
    text-decoration: underline;
  }
`;
