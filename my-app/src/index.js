
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Router
import { store } from "./store";
import { Provider } from "react-redux";
//utils
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);


