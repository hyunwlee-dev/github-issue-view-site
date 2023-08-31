import React, { useEffect, useRef } from 'react';
import { IssueItem } from '../../components/IssueItem';
import { useIssueList } from '../../hooks/useIssueList';
import { Issue } from '../../types/issue';
import * as S from './GithubIssueListContainer.style';

export const GithubIssueListContainer = () => {
  const target = useRef<any>('');

  useEffect(() => {
    observer.observe(target?.current);
  }, []);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    refetch();
  };

  const observer = new IntersectionObserver(callback, options);
  const { issueList, isLoading, error, refetch, page } = useIssueList();
  if (error) {
    return <>Error!</>;
  }
  return (
    <S.IssueList>
      <button onClick={refetch}>{page}</button>
      {isLoading}
      {issueList?.map(({ id, number, title, user, created_at, comments }: Issue) => (
        <IssueItem
          key={id}
          number={number}
          title={title}
          login={user?.login}
          created_at={created_at}
          comments={comments}
        />
      ))}
      {isLoading && <>loading...</>}
      <div ref={target} />
    </S.IssueList>
  );
};
