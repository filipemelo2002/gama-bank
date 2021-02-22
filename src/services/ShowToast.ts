import { toast } from 'react-toastify';

export const showError = (message: string): void => {
  toast.error(message);
};
export const showSuccess = (message: string): void => {
  toast.success(message);
};
