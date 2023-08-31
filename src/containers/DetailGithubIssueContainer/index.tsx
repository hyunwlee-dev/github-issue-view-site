import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../../api';
import { OWNER, REPO } from '../../constants';
import { Issue } from '../../types/issue';
import * as S from './DetailGithubIssueContainer.style';
import { formatDate } from '../../utils';

export const DetailGithubIssueContainer = () => {
  const navigate = useNavigate();
  const [issue, setIssue] = useState<Issue>();
  const params = useParams();
  const getIssueItem = async () => {
    try {
      const response = await axiosInstance.get(`/repos/${OWNER}/${REPO}/issues/${params.issue}`);
      setIssue(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };
  useEffect(() => {
    getIssueItem();
  }, []);
  return (
    <>
      <S.Info>
        <S.GoBackButton
          onClick={() => {
            navigate('/');
          }}
        >
          go back
        </S.GoBackButton>
        <S.TitleSection>
          <S.Title>{issue?.title}</S.Title>
          <span>{`#${issue?.number}`}</span>
        </S.TitleSection>
        <S.ContentSection>
          <S.Etc>
            <span>{`아이디: ${issue?.user.login}`}</span>
            <span>{`날짜: ${formatDate(String(issue?.created_at))}`}</span>
            <span>{`코멘트: ${issue?.comments}`}</span>
          </S.Etc>
          <S.Image>
            <img src={issue?.user.avatar_url} width={120} />
          </S.Image>
        </S.ContentSection>
      </S.Info>
      <S.MarkDown style={{ padding: '2rem' }} source={issue?.body} />
    </>
  );
};
