import { createContext } from 'react';
import type { ButtonSize } from './types';

/**
 * Lets a `ButtonGroup` set the size of all descendant `Button`s, replicating
 * Bootstrap's `.btn-group-sm` / `.btn-group-lg` behaviour without global
 * class-name coupling. `undefined` means "no group override".
 */
export const ButtonGroupContext = createContext<ButtonSize | undefined>(undefined);
