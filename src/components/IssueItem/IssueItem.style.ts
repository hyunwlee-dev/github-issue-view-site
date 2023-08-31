import { styled } from 'styled-components';

export const IssueItem = styled.li`
  list-style: none;
  display: flex;
  padding: 2rem;
  border-bottom: 2px solid #e2e2e2;
  align-items: center;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
  gap: 0.25rem;
`;

export const Title = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const Etc = styled.div`
  display: flex;
  gap: 0.25rem;
`;
