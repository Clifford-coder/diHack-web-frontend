import { useRoutes, Navigate } from 'react-router-dom';
import 'tailwindcss/dist/base.min.css';
import IndexPage from './pages/index';
import Signup from './pages/signup';
import SignIn from './pages/login';
import LearnSignLang from './pages/learnSignLang';
import { firebaseAuth } from './apis/Firebase';
import Notfound from './pages/Notfound';

function App() {
  const currentUser = firebaseAuth.getAuth().currentUser;

  let routing = useRoutes([
    {
      path: '/home',
      element: currentUser ? <IndexPage /> : <Navigate to="/sign-in" />,
    }, // protected
    {
      path: '/learn-sign-lang',
      element: currentUser ? <LearnSignLang /> : <Navigate to="/sign-in" />,
    }, // protected
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/sign-up', element: <Signup /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <Notfound /> },
  ]);

  return routing;
}

export default App;
