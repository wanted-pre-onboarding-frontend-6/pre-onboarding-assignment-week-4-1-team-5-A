import Thead from './Thead';
import Tbody from './Tbody';
import styled from 'styled-components';
import { TableType } from './type';

function Table({ type }: TableType) {
  return (
    <StyledTable>
      <Thead type={type} />
      <Tbody type={type} />
    </StyledTable>
  );
}
export default Table;

const StyledTable = styled.table``;
