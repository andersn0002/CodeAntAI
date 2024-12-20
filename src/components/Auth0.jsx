import React from 'react';
import styled from "styled-components";
import LeftAuth from "../helpers/LeftAuth";
import RightAuth from "../helpers/RightAuth";

const Auth0 = () => {
  return (
          <Authentication>
                  <LeftAuth />
                  <RightAuth />
          </Authentication>
  )
}

const Authentication = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        //height: 100vh;
`;

export default Auth0;
