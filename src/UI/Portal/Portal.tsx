import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  containerID: string;
}

const Portal: FC<PropsWithChildren<PortalProps>> = ({
                                                      containerID,
                                                      children,
                                                    }) => {
  return createPortal(
      children,
      document.getElementById(containerID) || document.body,
  );
};
export default Portal;
