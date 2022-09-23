import { useParamString } from 'hooks/useParamString';
import { SIDE_MENU } from 'libs/consts/sideMenu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Style';

const SideContent = () => {
  // params
  const { MENU_PATH, LIST_PATH } = useParamString();
  const navige = useNavigate();

  // sideList state
  const [sideList, setSideList] = useState(SIDE_MENU);

  // refresh selec sideList
  useEffect(() => {
    const menuList = [...sideList];
    if (!MENU_PATH) {
      return;
    }
    const menueSelect = menuList.find((menu: any) => menu.keyword === MENU_PATH);
    menueSelect!.state = true;

    if (!LIST_PATH) {
      return setSideList(menuList);
    }
    const listSelect = menueSelect?.children!.find((list: any) => list.keyword === LIST_PATH);
    listSelect!.state = true;
    setSideList(menuList);
  }, [MENU_PATH, LIST_PATH]);

  // onclick menu
  const onClickMenu = (id: number) => {
    const menuList = [...sideList];
    const menueSelect = menuList.find((menu: any) => menu.id === id);
    menueSelect!.state = !menueSelect!.state;
    setSideList(menuList);
  };

  // onclick list
  const onClickList = async (keyword: string) => {
    const menuList = [...sideList];
    for await (const menu of menuList) {
      if (menu.children) {
        for await (const list of menu.children) {
          if (list.keyword === keyword) {
            list.state = true;
            navige(`/${menu.keyword}/${list.keyword}`);
          } else {
            list.state = false;
          }
        }
      }
    }
    setSideList(menuList);
  };

  return (
    <Styled.Wrapper>
      {sideList.map((menu) => {
        return menu.keyword !== 'logout' ? (
          <Styled.Menu key={menu.id} state={menu.state}>
            <p onClick={() => onClickMenu(menu.id)}>{menu.name}</p>
            {menu.children &&
              menu.children.map((list) => (
                <ul>
                  <Styled.List
                    key={list.id}
                    state={list.state}
                    onClick={() => onClickList(list.keyword)}
                  >
                    {list.name}
                  </Styled.List>
                </ul>
              ))}
          </Styled.Menu>
        ) : (
          <Styled.Menu>
            <p>로그아웃</p>
          </Styled.Menu>
        );
      })}
    </Styled.Wrapper>
  );
};
export default SideContent;
