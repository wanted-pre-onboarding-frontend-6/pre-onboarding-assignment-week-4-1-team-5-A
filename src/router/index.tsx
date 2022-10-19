import ACCOUNT_PATH from './path/Account';
import HOME_PATH from './path/Home';
import USER_PATH from './path/User';

export default function Routes(isAuth: boolean) {
  return [...HOME_PATH(isAuth), ...USER_PATH(isAuth), ...ACCOUNT_PATH(isAuth)];
}
