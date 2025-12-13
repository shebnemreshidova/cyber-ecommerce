import { useRoutes } from 'react-router-dom'
import './App.css'
import { useRouter } from './routes/useRouter';

function App() {
  const routes=useRouter();
  const router=useRoutes(routes);
  return router
}

export default App
