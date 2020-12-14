import list from '../views/pages/home';
import detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': list, // default page
  '/home': list,
  '/detail/:id': detail,
  '/favorit': Like,
};

export default routes;
