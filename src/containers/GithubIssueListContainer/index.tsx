import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api';
import { IssueItem } from '../../components/IssueItem';
import { OWNER, REPO } from '../../constants';
import { Issue } from '../../types/issue';
import * as S from './GithubIssueListContainer.style';

export const GithubIssueListContainer = () => {
  const [issueList, setIssueList] = useState([]);
  const getGithubIssueList = async () => {
    try {
      const res = await axiosInstance.get(`/repos/${OWNER}/${REPO}/issues`);
      console.log(res.data);
      setIssueList(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };
  useEffect(() => {
    getGithubIssueList();
  }, []);
  return (
    <S.IssueList>
      {' '}
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
