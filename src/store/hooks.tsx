import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store'; // Ajusta la ruta si es necesario

export const useAppDispatch = () => useDispatch<AppDispatch>();
