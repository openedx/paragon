import { ToastProps as BaseToastProps } from 'react-bootstrap/Toast';

export interface ToastProps extends BaseToastProps {
    children: string;
    action?: {
        label: string;
        href?: string;
        onClick?: () => void;
    };
    closeLabel?: string;
    className?: string;
}

declare function Toast(props: ToastProps): JSX.Element;

export default Toast;
