import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './Home/Home';
import { loader as homeLoader } from './Home/Home';
import Shop from './Shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/cart',
        element: <div>Cart</div>,
      },
    ],
  },
]);

export default router;
