import { RouteObject } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage.tsx';
import CoinPage from '../pages/CoinPage/CoinPage.tsx';

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
