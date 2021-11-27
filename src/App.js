import { useRoutes, Navigate } from 'react-router-dom';
import 'tailwindcss/dist/base.min.css';
import IndexPage from './pages/index';
import Signup from './pages/signup';
import SignIn from './pages/login';
import { firebaseAuth } from './apis/Firebase';

function App() {
  const currentUser = firebaseAuth.getAuth().currentUser;

  let routing = useRoutes([
    {
      path: '/home',
      element: currentUser ? <IndexPage /> : <Navigate to="/sign-in" />,
    }, // protected
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/sign-up', element: <Signup /> },
    { path: '/sign-in', element: <SignIn /> },
  ]);

  return routing;
}

export default App;
