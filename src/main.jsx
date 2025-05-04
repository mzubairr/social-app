import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import Approuter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Approuter />
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
