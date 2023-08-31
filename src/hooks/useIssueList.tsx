import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { OWNER, REPO } from '../constants';
import { Issue } from '../types/issue';

export const useIssueList = () => {
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState<number>(1);
  const getIssueList = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/issues?state=open&sort=comments&page=${page}&per_page=10`,
      );
      if (issueList.length === 0) setIssueList(response.data);
      else setIssueList(prev => [...prev, ...response.data]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [issueList, page]);
  const refetch = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);
  useEffect(() => {
    getIssueList();
  }, [page]);
  return { issueList, isLoading, error, refetch, page };
};
