import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { OWNER, REPO } from '../constants';
import { Issue } from '../types/issue';

export const useIssueList = () => {
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const getIssueList = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/issues?state=open&sort=comments&page=1&per_page=10`,
      );
      setIssueList(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getIssueList();
  }, []);
  return { issueList, isLoading, error };
};
