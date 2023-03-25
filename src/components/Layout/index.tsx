import React, { createContext } from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';


export const MessageContext = createContext("");

const valor = "teste";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MessageContext.Provider value={valor}>
          <MenuBar />
            <Main />
          <SideBar />
        </MessageContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Layout;
