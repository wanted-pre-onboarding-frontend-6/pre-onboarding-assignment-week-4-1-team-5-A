export const SIDE_MENU = [
  {
    id: 1,
    name: '계좌 관리',
    keyword: 'accounts',
    state: false,
    children: [{ id: 1, name: '계좌 목록', keyword: 'account-list', state: false }],
  },
  {
    id: 2,
    name: '사용자 관리',
    keyword: 'users',
    state: false,
    children: [{ id: 1, name: '사용자 목록', keyword: 'user-list', state: false }],
  },
  { id: 9999, name: '로그아웃', keyword: 'logout' },
];
