import { CanActivateFn } from '@angular/router';

export const authGaurd: CanActivateFn = (routes, state) => {
  const expTimeStr = localStorage.getItem('expireTime');
  if (!expTimeStr) {
    window.location.href = '';
    return false;
  }
  const expTime = new Date(expTimeStr);
  const currentDate = new Date();
  const notExpired = currentDate < expTime;
  if (!notExpired) {
    window.location.href = '';
    return false;
  }

  return true;
};
