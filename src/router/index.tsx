import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '../components/Layout';
import { DetailGithubIssueContainer, GithubIssueListContainer } from '../containers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <GithubIssueListContainer /> },
      { path: '/issue/:issue', element: <DetailGithubIssueContainer /> },
    ],
  },
]);

export default router;
