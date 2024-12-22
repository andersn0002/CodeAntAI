import React from 'react';
import styled from 'styled-components';
import SideBar from '../helpers/Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <SideBar />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;


export default Layout;
  