import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  DocumentTextIcon,
  ChevronDownIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  HomeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logos from "../assets/logo.svg";

const SideBar = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileLocal = width < 768;
      setIsMobile(isMobileLocal);
      isMobileRef.current = isMobileLocal;
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SideBarContainer>
      <TopBar>
        <Logo>
          <img src={Logos} alt="logo" />
          <h1>CodeAnt AI</h1>
        </Logo>
        <MobileMenuButton onClick={() => setIsSideBarVisible((prev) => !prev)}>
          {isSideBarVisible ? (
            <XMarkIcon
              className="w-6"
              style={{ backgroundColor: "white", strokeWidth: "2" }}
            />
          ) : (
            <Bars3Icon
              className="w-6"
              style={{ backgroundColor: "white", strokeWidth: "2" }}
            />
          )}
        </MobileMenuButton>
      </TopBar>

      <SidebarContent isMobile={isMobile} isSideBarVisible={isSideBarVisible}>
        <SidebarInner>
          <UserSection isMobile={isMobile}>
            <span>
              <p>UtkarshDhairyaPanwar</p>
              <ChevronDownIcon className="w-5" />
            </span>
          </UserSection>

          <Navigation>
            <a href="#" className="active">
              <HomeIcon className="w-6" />
              <span>Repositories</span>
            </a>
            <a href="#">
              <CodeBracketIcon className="w-6" />
              <span>AI Code Review</span>
            </a>
            <a href="#">
              <CloudIcon className="w-6" />
              <span>Cloud Security</span>
            </a>
            <a href="#">
              <DocumentTextIcon className="w-6" />
              <span>How to Use</span>
            </a>
            <a href="#">
              <Cog6ToothIcon className="w-6" />
              <span>Settings</span>
            </a>
          </Navigation>

          <FooterLinks>
            <a href="#">
              <PhoneIcon className="w-5" />
              <span>Support</span>
            </a>
            <a href="/">
              <ArrowRightStartOnRectangleIcon className="w-5" />
              <span>Logout</span>
            </a>
          </FooterLinks>
        </SidebarInner>
      </SidebarContent>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-right: 1px solid #e5e7eb;

  .w-5 {
    width: 1.25rem;
  }
  .w-6 {
    width: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 16rem;
    height: 100vh;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: 0.5rem 0;
  height: 4rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  img {
    width: 1.7rem;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    height: 100%;
    background: white;
  }

  height: ${(props) =>
    props.isMobile
      ? props.isSideBarVisible
        ? "calc(100vh - 4rem)"
        : "0px"
      : "100%"};
  transform: ${(props) =>
    props.isSideBarVisible ? "translateY(5rem)" : "translateY(0)"};
`;

const SidebarInner = styled.div`
  background: white;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 100%;
  }
  background: white;
`;

const UserSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 0.95rem;
    width: 100%;
    justify-content: space-between;
  }

  p {
    white-space: nowrap; /* Prevent the text from wrapping */
    overflow: hidden; /* Hide the overflowing text */
    text-overflow: ellipsis; /* Add ellipsis for overflowing text */
    max-width: ${(props) => (props.isMobile ? "100%" : "135px")};
  }
`;

const Navigation = styled.nav`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: black;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.45rem;
    text-decoration: none;

    &.active {
      background-color: #1570ef;
      color: white;

      &:hover {
        background-color: black;
      }
    }

    &:hover {
      background-color: #f3f4f6;
    }

    span {
      margin-left: 0.75rem;
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

const FooterLinks = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: black;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.375rem;
    text-decoration: none;

    &:hover {
      background-color: #f3f4f6;
    }

    span {
      margin-left: 0.75rem;
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

export default SideBar;
