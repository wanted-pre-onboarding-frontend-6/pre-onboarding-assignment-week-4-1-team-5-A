import { useParamString } from 'hooks/useParamString';
import { SIDE_TITLE } from 'libs/consts/sideTitle';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './Style';

const LayoutHeader = () => {
  const { LIST_PATH } = useParamString();
  const titleList = useRef(SIDE_TITLE);

  const [pathTitle, setPathTitle] = useState('Dashboard');

  useEffect(() => {
    const title = titleList.current.find((title) => title.keyword === LIST_PATH);
    if (title) {
      setPathTitle(title.title);
    }
  }, [LIST_PATH]);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <div>{pathTitle}</div>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default LayoutHeader;
