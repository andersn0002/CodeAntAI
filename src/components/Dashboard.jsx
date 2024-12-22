import React from 'react';
import styled from 'styled-components';
import SideBar from '../helpers/Sidebar.jsx';
import DashboardMiddle from "../helpers/DashboardMiddle.jsx";

const Dashboard = () => {
  return (
    <LayoutContainer>
      {/* Main Sidebar -> Dashboard */}
      <SideBar />
      <MainContent>
        {/* Main Data Showage -> Dashboard */}
        <DashboardMiddle />
      </MainContent>
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


export default Dashboard;
  