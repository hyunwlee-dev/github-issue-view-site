import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../api';
import { OWNER, REPO } from '../../constants';
import { Issue } from '../../types/issue';

export const DetailGithubIssueContainer = () => {
  const [issue, setIssue] = useState<Issue>();
  const params = useParams();
  console.log('params: ', params);
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
  return <div>{issue?.title}</div>;
};
