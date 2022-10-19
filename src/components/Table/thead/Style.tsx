import styled from 'styled-components';

type TheadeStyleType = {
  type: 'account' | 'user';
};

export const Thead = styled.thead<TheadeStyleType>`
  display: table-header-group;
  background-color: #f5f5f5;
  text-align: center;
  font-size: 10px;

  & th {
    border: 1px solid #999;
    border-collapse: collapse;
    padding: 8px;
  }
`;
