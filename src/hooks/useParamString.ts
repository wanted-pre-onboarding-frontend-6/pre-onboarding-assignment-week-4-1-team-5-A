import { useLocation } from 'react-router-dom';

export const useParamString = () => {
  const params = useLocation().pathname.split('/');
  const MENU_PATH = params[1];
  const LIST_PATH = params[2];
  return { MENU_PATH, LIST_PATH };
};
