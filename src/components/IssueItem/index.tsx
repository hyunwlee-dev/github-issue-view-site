import React from 'react';
import { HTMLAttributes } from 'react';
import { formatDate } from '../../utils/formatDate';
import * as S from './IssueItem.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  number: number;
  title: string;
  login: string;
  created_at: string;
  comments: number;
}

export const IssueItem: React.FC<IProps> = ({ number, title, login, created_at, comments }) => {
  return (
    <S.IssueItem>
      <S.FlexWrapper>
        <S.Title>
          <span>{`#${number}`}</span>
          <span>{title}</span>
        </S.Title>
        <S.Etc>
          <span>{`작성자: ${login},`}</span>
          <span>{`작성일: ${formatDate(created_at)}`}</span>
        </S.Etc>
      </S.FlexWrapper>
      <div>{`코멘트: ${comments}`}</div>
    </S.IssueItem>
  );
};
