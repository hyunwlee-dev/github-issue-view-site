import axios from 'axios';
import React, { useEffect } from 'react';
import { axiosInstance } from './api';
import GlobalStyle from './styles/global';

function App() {
  const testGetIssueList = async () => {
    try {
      const res = await axiosInstance.get('/repos/octocat/Spoon-Knife/issues');
      console.info('res', res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };
  useEffect(() => {
    testGetIssueList();
  });
  return (
    <>
      <GlobalStyle />
      hi
    </>
  );
}

export default App;
