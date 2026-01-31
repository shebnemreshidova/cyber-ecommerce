import { useRoutes } from 'react-router-dom'
import './App.css'
import { routerConfig } from './routes/routerConfig';

function App() {
  const routes=routerConfig;
  const router=useRoutes(routes);
  return router
}

export default App
