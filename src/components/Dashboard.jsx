import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import Layout from "../helpers/Layout.jsx";
import { 
  ArrowPathIcon, 
  CircleStackIcon, 
  MagnifyingGlassIcon, 
  PlusIcon 
} from "@heroicons/react/24/outline";
import { DataMock } from "../../data";

const Dashboard = () => {
    const [filteredData, setFilteredData] = useState(DataMock);

    const handleFilter = (e) => {
        const value = e.target.value;
        const filtered = DataMock.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.language.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <Layout>
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
                                    Refresh All
                                </ActionButton>
                                <PrimaryActionButton>
                                    <PlusIcon className="size-4" />
                                    Add Repository
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
                                <RepositoryItem key={index} lastItem={index === filteredData.length - 1}>
                                    <RepositoryHeader>
                                        <span>{item.title}</span>
                                        <RepositoryType>{item.type}</RepositoryType>
                                    </RepositoryHeader>
                                    <RepositoryDetails>
                                        <DetailItem>
                                            {item.language}
                                            <LanguageIndicator />
                                        </DetailItem>
                                        <DetailItem>
                                            <CircleStackIcon className="w-4" />{item.size}
                                        </DetailItem>
                                        <DetailItem>{item.updatedAt}</DetailItem>
                                    </RepositoryDetails>
                                </RepositoryItem>
                            ))
                        ) : (
                            <NoData>Looks like there is no repository to show.</NoData>
                        )}
                    </RepositoryList>
                </RepositoryContainer>
            </Container>
        </Layout>
    );
};

// Styled Components
const Container = styled.div`
    padding: 0.5rem;
`;

const RepositoryContainer = styled.div`
    background: white;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
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
    font-size: 1.25rem;
`;

const Subtitle = styled.span`
    font-weight: 300;
    font-size: 0.875rem;
`;

const HeaderActions = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.5rem;
    font-size: 0.75rem;
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
    border: 1px solid #e5e5e5;
    border-radius: 0.5rem;
`;

const SearchInput = styled.input`
    font-size: 0.75rem;
    width: 200px;
    border: none;
    outline: none;
    color: #4a4a4a;

    &::placeholder {
        color: #a1a1a1;
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
    background: ${(props) => (props.lastItem ? "none" : "#f9f9f9")};
    border-bottom: ${(props) => (props.lastItem ? "none" : "1px solid #e5e5e5")};
    &:hover {
        background: #f5f5f5;
    }
`;

const RepositoryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
    gap: 1rem;
    font-size: 0.875rem;
    font-weight: 300;
`;

const DetailItem = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
    color: #9e9e9e;
    font-size: 0.875rem;
    font-weight: 300;
`;

export default Dashboard;