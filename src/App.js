import { useRoutes } from 'react-router-dom';
import 'tailwindcss/dist/base.min.css';
import IndexPage from './pages/index';

function App() {
  let routes = useRoutes([{ path: '/', element: <IndexPage /> }]);
  return routes;
}

export default App;
