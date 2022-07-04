import React, { useState } from 'react';
import DarkModeComponent from '../DarkMode/DarkModeComponent';
import Login from '../Login';
import Dashboard from '../Dashboard';
import { BaseWrapperVertical } from '../../styles/styles';
import styled from '@emotion/styled';
import Logout from '../Logout';
import AppName from '../Name';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: inline-flex;
  width: 100%;
  height: 50px;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1500;
  display: inline-flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutSpacer = styled.div`
  position: relative;
  display: inline-flex;
  width: 75px;
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BaseWrapperVertical>
      <Header>
        <HeaderContent className="header-layer-1">
        <AppName />
        <DarkModeComponent />
          {isAuthenticated ? (
            <Logout setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <LogoutSpacer />
          )}
        </HeaderContent>
      

      </Header>
      <BaseWrapperVertical className="overflow-y-scroll margin-t-50">
      
        {isAuthenticated ? (
         
          <Dashboard setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </BaseWrapperVertical>
    </BaseWrapperVertical>
  );
};

export default App;
