const parseAssets = (assets: number) => {
  return Math.ceil(assets)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export default parseAssets;
