import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <div>Shop</div>,
      },
      {
        path: '/cart',
        element: <div>Cart</div>,
      },
    ],
  },
]);

export default router;
