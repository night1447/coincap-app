import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  containerID: string;
}

export const Portal = ({ containerID, children }: PropsWithChildren<PortalProps>) => {
    return createPortal(
        children,
        document.getElementById(containerID) || document.body,
    );
};
