import { RouteObject } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage';
import CoinPage from '../pages/CoinPage/CoinPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:id',
    element: <CoinPage />,
  },
];
export default routes;
