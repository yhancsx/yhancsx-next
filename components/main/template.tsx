import React, { ReactNode, ReactNodeArray } from 'react';

type Props = {
  children: ReactNode | ReactNodeArray;
};

export default function Template({ children }: Props) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16">
      {children}
    </article>
  );
}
