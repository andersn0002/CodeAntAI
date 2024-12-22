import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import {
  ArrowPathIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { DataMock } from "../../data";

const DashboardMiddle = () => {
  const [filteredData, setFilteredData] = useState(DataMock);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = DataMock.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.language.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Container>
      <RepositoryContainer>
        <Header>
          <HeaderTop>
            <HeaderInfo>
              <Title>Repositories</Title>
              <Subtitle>33 total repositories</Subtitle>
            </HeaderInfo>
            <HeaderActions>
              <ActionButton>
                <ArrowPathIcon className="size-4" />
                <p onClick={() => window.location.reload()}>Refresh All</p>
              </ActionButton>
              <PrimaryActionButton>
                <PlusIcon className="size-4" />
                <p>Add Repository</p>
              </PrimaryActionButton>
            </HeaderActions>
          </HeaderTop>
          <SearchContainer>
            <SearchLabel htmlFor="inputSearch">
              <MagnifyingGlassIcon className="size-4 stroke-2" />
              <SearchInput
                id="inputSearch"
                placeholder="Search Repositories"
                onChange={handleFilter}
              />
            </SearchLabel>
          </SearchContainer>
        </Header>
        <RepositoryList>
          {filteredData.length >= 1 ? (
            filteredData.map((item, index) => (
              <RepositoryItem
                key={index}
                lastItem={index === filteredData.length - 1}
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay={index*100}
              >
                <RepositoryHeader>
                  <span style={{fontSize: "1.2em"}}>{item.title}</span>
                  <RepositoryType>{item.type}</RepositoryType>
                </RepositoryHeader>
                <RepositoryDetails>
                  <DetailItem>
                    {item.language}
                    <LanguageIndicator />
                  </DetailItem>
                  <DetailItem>
                    <CircleStackIcon className="w-4" />
                    {item.size}
                  </DetailItem>
                  <DetailItem>{item.updatedAt}</DetailItem>
                </RepositoryDetails>
              </RepositoryItem>
            ))
          ) : (
            <NoData>It seems the Repository doesn't exist.</NoData>
          )}
        </RepositoryList>
      </RepositoryContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 1.5rem;
`;

const RepositoryContainer = styled.div`
  background: white;
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;

  .size-4{
	width: 1rem; /* 16px */
    height: 1rem; /* 16px */
  }
  .stroke-2{
    stroke-width: 2;
  }
  .w-4{
    width: 1rem;
  }
`;

const Header = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`;

const Subtitle = styled.span`
  font-weight: 400;
  font-size: 0.835rem;
  color: #5e5c5c;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  font-size: 0.85rem;

  @media (max-width: 768px){
      font-size: 0.7rem;
      gap: 0.25rem;
      padding: 0.5rem 0.5rem;
  }
`;

const PrimaryActionButton = styled(ActionButton)`
  background: #1570ef;
  color: white;
`;

const SearchContainer = styled.div`
  display: flex;
`;

const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #cdc8c8;
  border-radius: 0.5rem;
`;

const SearchInput = styled.input`
  font-size: 0.85rem;
  width: 250px;
  border: none;
  outline: none;

  &::placeholder {
    color: black;
  }
  @media (max-width: 768px){
      width: 100%;
  }
`;

const RepositoryList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RepositoryItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: white;    
  border-bottom: ${(props) => (props.lastItem ? "none" : "1px solid #e5e5e5")};
  border-radius: ${(props) => (props.lastItem ? "0.8rem" : "none")};
  &:hover {
    background: #f5f5f5;
  }
`;

const RepositoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span{
      font-weight: 500;
  }
`;

const RepositoryType = styled.span`
  background: #eff8ff;
  border: 1px solid #b2ddff;
  color: #1570ef;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
`;

const RepositoryDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

const DetailItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const LanguageIndicator = styled.span`
  background: #1570ef;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

const NoData = styled.div`
  padding: 1rem;
  text-align: center;
  color: black;
  font-size: 1.25rem;
  font-weight: 500;
`;

export default DashboardMiddle;
