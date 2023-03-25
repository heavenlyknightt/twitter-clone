import React, { createContext, useState } from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';

interface MessageContextInterface {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageContext = React.createContext<MessageContextInterface>({
  value: "",
  setValue: () => {},
});

const Layout: React.FC = () => {
  
  const [value, setValue] = useState("Natanael");
  
  return (
    <Container>
      <Wrapper>
        <MessageContext.Provider value={{ value, setValue }}>
          <MenuBar />
            <Main />
          <SideBar />
        </MessageContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Layout;
