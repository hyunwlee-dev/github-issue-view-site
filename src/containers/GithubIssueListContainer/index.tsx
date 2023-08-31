import React from 'react';
import { Link } from 'react-router-dom';
import { IssueItem } from '../../components/IssueItem';
import { Loading } from '../../components/Loading';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useIssueList } from '../../hooks/useIssueList';
import { Issue } from '../../types/issue';
import * as S from './GithubIssueListContainer.style';

export const GithubIssueListContainer = () => {
  const { issueList, isLoading, error, refetch } = useIssueList();
  const { target } = useIntersectionObserver(refetch);
  if (error) {
    return <>Error!</>;
  }
  return (
    <>
      <S.IssueList>
        {issueList?.map(({ id, number, title, user, created_at, comments }: Issue) => (
          <Link to={`/issue/${number}`} key={id}>
            <IssueItem
              number={number}
              title={title}
              login={user?.login}
              created_at={created_at}
              comments={comments}
            />
          </Link>
        ))}
      </S.IssueList>
      {isLoading}
      {<Loading />}
      <div ref={target} />
    </>
  );
};
