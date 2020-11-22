import CheckIn from '../pages/CheckIn';
import Qrcode from '../pages/Qrcode';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default [
  {
    key: 'check-in',
    path: '/',
    exact: true,
    component: CheckIn,
    title: '',
  },
  {
    key: 'qrcode',
    path: '/qrcode',
    exact: true,
    component: Qrcode,
    title: '',
  },
  {
    key: 'login',
    path: '/login',
    exact: true,
    component: Login,
    title: '',
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    title: '',
  },
];
