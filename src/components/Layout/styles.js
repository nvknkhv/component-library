import styled from 'styled-components';

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--grey-2);
`;

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.main`
  flex-grow: 1;
`;

export const Preview = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;
