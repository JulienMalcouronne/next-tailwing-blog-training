import { ReactNode } from 'react';

const PaddingContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className='px-8 w-full mx-auto'>{children}</div>
  )
};

export default PaddingContainer;
