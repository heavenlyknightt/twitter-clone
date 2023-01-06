import React, { useState } from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  
  const [showEditPage, setShowEditPage] = useState(false);
  
  const handleEditClick = () => {
    setShowEditPage(true);
  }

  return (
    <Container>
      <Wrapper>
        <MenuBar /> 
          <Main onEditClick={handleEditClick} />
          { showEditPage ? <EditPage /> : null }
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
