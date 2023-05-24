import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successNote = msg =>
  toast.success(msg, {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    closeButton: false,
  });

export const errorNote = msg =>
  toast.error(msg, {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    closeButton: false,
  });