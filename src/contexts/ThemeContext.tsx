import { createContext } from 'react';
import { ThemeContextType } from './Theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
