import parseAssets from 'libs/utils/parseAssets';
import { ChartItemType } from '../Detail';
import * as Styled from './Style';

type AccountChartPropsType = {
  item: ChartItemType[];
  height: number;
  width: number;
};

const AccountDetailChart = ({ item, height, width }: AccountChartPropsType) => {
  return (
    <Styled.Wrapper width={width} height={height}>
      {item.length > 0 &&
        item.map((data: ChartItemType) => {
          return (
            <Styled.ChartWrapper>
              <Styled.ChartTitle color={data.color}>
                {data.name}
                <Styled.ChartValue>{parseAssets(data.value)}</Styled.ChartValue>
              </Styled.ChartTitle>
              <Styled.Chart height={data.height} width={data.width} color={data.color} />
            </Styled.ChartWrapper>
          );
        })}
    </Styled.Wrapper>
  );
};
export default AccountDetailChart;
