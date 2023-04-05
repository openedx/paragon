import { FC } from 'react';

interface StackTypes extends HTMLAttributes<HTMLDivElement> {
  direction?: typeof DIRECTION_VARIANTS[number];
  gap?: number;
}

declare const Stack: FC<StackTypes>;

export default Stack;
