import React from "react";
import styled from "styled-components";
import { ArrowLongUpIcon } from "@heroicons/react/16/solid";
import BigLogo from "../assets/bigLogo.png";
import Logo from "../assets/logo.svg";
import Graph from "../assets/GraphAuth.svg";

const LeftAuth = () => {
  return (
    <AuthLeftContainer>
      <LogoImage src={BigLogo} alt="logo" />
      <Card>
        <CardHeader>
          <img src={Logo} alt="logo" style={{ width: "24px", height: "24px" }} />
          <span style={{ fontWeight: "700", fontSize: "1.1rem" }}>AI to Detect & Autofix Bad Code</span>
        </CardHeader>
        <CardContent>
          <StatBox>
            <span>30+</span>
            <span>Language Support</span>
          </StatBox>
          <StatBox>
            <span>10K+</span>
            <span>Developers</span>
          </StatBox>
          <StatBox>
            <span>100K+</span>
            <span>Hours Saved</span>
          </StatBox>
        </CardContent>
      </Card>
      <StatsCard>
        <GraphContainer>
          <img src={Graph} alt="Random-Graph" />
          <GrowthInfo>
            <div className="growth">
              <ArrowLongUpIcon style={{ width: "20px" }} />
              <span>14%</span>
            </div>
            <div className="week">This week</div>
          </GrowthInfo>
        </GraphContainer>
        <IssueInfo>
          <span>Issues Fixed</span>
          <span>500K+</span>
        </IssueInfo>
      </StatsCard>
    </AuthLeftContainer>
  );
};

const AuthLeftContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  height: 100%;
  width: 50%;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 300px;
  aspect-ratio: 1;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 24px 0 rgba(8, 23, 53, 0.16);
`;

const CardHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px;
`;

const CardContent = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-weight: 700;
    font-size: 1.1rem;  
  }

  span:last-child {
    font-size: 0.875rem;
  }
`;

const StatsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 32px;
  border-radius: 16px;
  transform: translateX(40%) translateY(-10px);
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 24px 0 rgba(8, 23, 53, 0.16);
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;

  img {
    display: block;
  }
`;

const GrowthInfo = styled.div`
  display: flex;
  flex-direction: column;

  .growth {
    display: flex;
    align-items: center;
    color: #0000ba;
    font-weight: 700;
  }

  .growth span {
    margin-left: 4px;
  }

  .week {
    font-size: 0.75rem;
    font-weight: 300;
    text-align: center;
  }
`;

const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: 700;
    font-size: 0.9rem;
  }

  span:last-child {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export default LeftAuth;
