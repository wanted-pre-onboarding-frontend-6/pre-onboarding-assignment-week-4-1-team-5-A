import styled from 'styled-components';

type ChartProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const Wrapper = styled.div<ChartProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: flex;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ChartTitle = styled.div<ChartProps>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ color }) => color};
  transform: translateX(-40%);
  text-align: center;
`;
export const ChartValue = styled.div``;

export const Chart = styled.div<ChartProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}%`};
  background-color: ${({ color }) => color};
`;
