import { createBrowserRouter } from 'react-router';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <h2>Home</h2>,
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
