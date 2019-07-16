const isMobile = () => {
  if (navigator.userAgent.toLowerCase().indexOf('mobi') != -1) return true;
  return false;
};
const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  return 'pc';
};

export { getDeviceType };
