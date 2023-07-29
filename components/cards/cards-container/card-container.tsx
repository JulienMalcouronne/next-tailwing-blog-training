import { ReactNode } from 'react';

const CardContainer = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-4 p-4">{children}</div>
  );
};

export default CardContainer;
