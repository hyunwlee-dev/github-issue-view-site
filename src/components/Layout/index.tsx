import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container';
import * as S from './BaseLayout.style';

export const BaseLayout = () => {
  return (
    <>
      <S.Header>
        <h1>github issue list {/* need to convert heading by url */}</h1>
      </S.Header>
      <main>
        <Container>{<Outlet />}</Container>
      </main>
    </>
  );
};
