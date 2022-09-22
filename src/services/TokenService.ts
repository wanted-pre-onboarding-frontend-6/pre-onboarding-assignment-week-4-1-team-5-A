const TokenService = {
  setToken: ({ key, token }: { key: string; token: string }) => {
    localStorage.setItem(key, token);
  },

  getToken: (key: string) => {
    return localStorage.getItem(key);
  },

  removeToken: (key: string) => {
    localStorage.removeItem(key);
  },
};
export default TokenService;
