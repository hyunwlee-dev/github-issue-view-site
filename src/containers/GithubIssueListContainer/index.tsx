import React from 'react';
import { IssueItem } from '../../components/IssueItem';
import { useIssueList } from '../../hooks/useIssueList';
import { Issue } from '../../types/issue';
import * as S from './GithubIssueListContainer.style';

export const GithubIssueListContainer = () => {
  const { issueList, isLoading, error } = useIssueList();
  if (isLoading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Error!</>;
  }
  return (
    <S.IssueList>
      {issueList?.map(({ id, number, title, user, created_at, comments }: Issue) => (
        <IssueItem
          key={id}
          number={number}
          title={title}
          login={user.login}
          created_at={created_at}
          comments={comments}
        />
      ))}
    </S.IssueList>
  );
};
