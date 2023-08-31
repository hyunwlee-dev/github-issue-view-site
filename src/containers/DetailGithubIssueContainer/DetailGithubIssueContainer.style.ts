import { styled } from 'styled-components';
import MarkDownPreview from '@uiw/react-markdown-preview';

export const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  background: #e2e2e2;
  gap: 2rem;
`;

export const GoBackButton = styled.button`
  position: absolute;
  top: 2px;
  left: 2px;
  background: #e2e2e2;
  padding: 0.5rem;
  border: 1px solid black;
`;

export const MarkDown = styled(MarkDownPreview)`
  padding: 2rem;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  gap: 1rem;
`;

export const Image = styled.div`
  flex: 0 1 auto;
`;

export const Etc = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;
