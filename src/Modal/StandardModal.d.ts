import React from 'react';
import { BaseModalProps } from './BaseModalProps';

export interface StandardModalProps extends Omit<BaseModalProps, 'isBlocking'> {
  title: string,
  beforeBodyNode?: React.ReactNode;
  afterBodyNode?: React.ReactNode;
}

declare const StandardModal: React.FC<StandardModalProps>;

export default StandardModal;
