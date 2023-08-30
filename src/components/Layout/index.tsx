import React, { HTMLAttributes, ReactNode } from 'react';
import * as S from './BaseLayout.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <S.Header>
        <h1>github issue list {/* need to convert heading by url */}</h1>
      </S.Header>
      <main>{children}</main>
    </>
  );
};
