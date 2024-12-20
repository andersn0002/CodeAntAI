import React, { useState } from "react";
import styled from "styled-components";
import { KeyIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.svg";
import GitHubIcon from "../assets/github.svg";
import BitbucketIcon from "../assets/bitbucket.svg";
import AzureDevOpsIcon from "../assets/azure-devops.svg";
import GitLabIcon from "../assets/gitlab.svg";
import { useSpring, animated } from "@react-spring/web";

const RightAuth = () => {
  const [notSelf, setNotSelf] = useState(true);
  const { x } = useSpring({
    x: notSelf ? 0 : -50, // 0% for SAAS, -50% for Self Hosted
    config: { tension: 220, friction: 20 }, // Controls smoothness
  });

  return (
    <AuthRightContainer>
      <Card>
        <Header>
          <Head>
            <img src={Logo} alt="logo" />
            <span>CodeAnt AI</span>
          </Head>
          <div style={{ fontSize: "35px", fontWeight: 600, marginTop: "10px" }}>
            Welcome to CodeAnt AI
          </div>
          <ButtonGroup>
            <button
              className={notSelf ? "active" : ""}
              onClick={() => setNotSelf(true)}
            >
              SAAS
            </button>
            <button
              className={!notSelf ? "active" : ""}
              onClick={() => setNotSelf(false)}
            >
              Self Hosted
            </button>
          </ButtonGroup>
        </Header>
        <SignInMethods>
          <SliderContainer>
            <SliderContent
              style={{
                transform: x.to((x) => `translateX(${x}%)`), // Smoothly transition sections
              }}
            >
              {/* SAAS Sign-In Methods */}
              <SignInSection>
                <Button href="/dashboard">
                  <img src={GitHubIcon} alt="github" />
                  Sign in with Github
                </Button>
                <Button href="/dashboard">
                  <img src={BitbucketIcon} alt="bitbucket" />
                  Sign in with Bitbucket
                </Button>
                <Button href="/dashboard">
                  <img src={AzureDevOpsIcon} alt="azure-devops" />
                  Sign in with Azure DevOps
                </Button>
                <Button href="/dashboard">
                  <img src={GitLabIcon} alt="gitlab" />
                  Sign in with GitLab
                </Button>
              </SignInSection>
              {/* Self Hosted Sign-In Methods */}
              <SignInSection>
                <Button href="/dashboard">
                  <img src={GitLabIcon} alt="gitlab" />
                  Sign in with GitLab
                </Button>
                <Button href="/dashboard">
                  <KeyIcon />
                  Sign in with SSO
                </Button>
              </SignInSection>
            </SliderContent>
          </SliderContainer>
        </SignInMethods>
      </Card>
      <Footer>
        <span>
          By signing up you agree to the <b>Privacy Policy.</b>
        </span>
      </Footer>
    </AuthRightContainer>
  );
};

const AuthRightContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;

  @media (min-width: 768px) {
    max-width: none;
    width: 50%;
  }
`;

const Card = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  border: 1px solid #e5e7eb;
  min-height: 500px;
`;

const Header = styled.div`
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  text-align: center;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  background-color: rgba(229, 231, 235, 0.7);
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  button {
    padding: 12px;
    flex: 1;
    border-radius: 8px;
    background-color: transparent;
    color: black;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 2.2s;

    &.active {
      background-color: #1570ef;
      color: white;
    }
  }
`;

const SignInMethods = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const SliderContainer = styled.div`
  overflow: hidden; /* Ensures only one section is visible at a time */
  width: 100%;
  position: relative;
`;

const SliderContent = styled(animated.div)`
  display: flex;
  width: 200%; /* Holds both sections side by side */
  height: 100%; /* Ensure it fits the content */
  transition: transform 0.5s ease-in-out; /* Smooth transition */
`;

const SignInSection = styled.div`
  width: 50%; /* Each section takes half of SliderContent */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  box-sizing: border-box; /* Ensures padding doesn’t affect layout */
`;


const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #cdcdcd;
  border-radius: 12px;
  width: 100%;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 1.1rem;

  img {
    width: 25px;
    height: 25px;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

const Footer = styled.div`
  text-align: center;

  span {
    font-size: 16px;

    b {
      font-weight: bold;
    }
  }
`;

export default RightAuth;
