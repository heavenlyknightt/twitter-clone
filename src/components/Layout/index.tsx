import React, { createContext } from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';


export const MessageContext = createContext("");

const Layout: React.FC = () => {
  
  const [value, setValue] = useState("initial value");
  
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
