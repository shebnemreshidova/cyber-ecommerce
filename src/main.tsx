import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/authContext.tsx'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      <ToastContainer />
    </BrowserRouter>
  </ Provider>
)
