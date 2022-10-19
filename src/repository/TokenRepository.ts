const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY as string;

const TokenRepository = {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
export default TokenRepository;
