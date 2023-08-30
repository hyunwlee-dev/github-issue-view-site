import React from 'react';
import Container from './components/Container';
import { BaseLayout } from './components/Layout';
import { GithubIssueListContainer } from './containers';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BaseLayout>
        <Container>
          <GithubIssueListContainer />
        </Container>
      </BaseLayout>
    </>
  );
}

export default App;
