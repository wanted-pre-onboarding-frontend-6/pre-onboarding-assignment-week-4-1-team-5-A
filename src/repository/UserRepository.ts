const USER_INFO_KEY = process.env.REACT_APP_TOKEN_KEY as string;

const UserRepository = {
  getUser: () => {
    return localStorage.getItem(USER_INFO_KEY);
  },

  setUser: (info: any) => {
    localStorage.setItem(USER_INFO_KEY, info);
  },

  removeUser: () => {
    localStorage.removeItem(USER_INFO_KEY);
  },
};
export default UserRepository;
