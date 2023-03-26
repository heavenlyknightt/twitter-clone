import React, { createContext, useState } from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';

interface MessageContextInterface {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  bio: string;
  setBio: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageContext = React.createContext<MessageContextInterface>({
  username: "",
  setUsername: () => {},
  bio: "",
  setBio: () => {},
});

const Layout: React.FC = () => {
  
  const [username, setUsername] = useState("Natanael Martins");
  const [bio, setBio] = setState("Estudante de Sistemas de Informação :)");
  
  return (
    <Container>
      <Wrapper>
        <MessageContext.Provider value={{ username, setUsername, bio, setBio }}>
          <MenuBar />
            <Main />
          <SideBar />
        </MessageContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Layout;
