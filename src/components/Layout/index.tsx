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
  avatar: File | null | undefined;
  setAvatar: React.Dispatch<React.SetStateAction<File | null>(null)>;
  header: File | null | undefined;
  setHeader: React.Dispatch<React.SetStateAction<File | null>(null)>;
}

export const MessageContext = React.createContext<MessageContextInterface>({
  username: "",
  setUsername: () => {},
  bio: "",
  setBio: () => {},
  avatar: null,
  setAvatar: () => {},
  header: null,
  setHeader: () => {},
});

const Layout: React.FC = () => {
  
  const [username, setUsername] = useState("Natanael Martins");
  const [bio, setBio] = useState("Estudante de Sistemas de Informação :)");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [header, setHeader] = useState<File | null>(null);
  
  return (
    <Container>
      <Wrapper>
        <MessageContext.Provider value={{ username, setUsername, bio, setBio, avatar, setAvatar, header, setHeader }}>
          <MenuBar />
            <Main />
          <SideBar />
        </MessageContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Layout;
