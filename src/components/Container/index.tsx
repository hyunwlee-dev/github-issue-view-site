import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import * as S from './Container.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Container: React.FC<IProps> = ({ children, ...restProps }) => {
  return <S.Container {...restProps}>{children}</S.Container>;
};

export default Container;
