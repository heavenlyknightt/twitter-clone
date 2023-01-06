import React, { useState } from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';
import EditPage from '../EditPage';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  
  const [username, setUsername] = useState('Natanael Martins'); 
  const [bio, setBio] = useState('Estudante de Sistemas de Informação :)');
  const [avatar, setAvatar] = useState<File | null>(null);
  const [header, setHeader] = useState<File | null>(null);
  const closeModal = () => setShowEditPage(false);
  
  const [showEditPage, setShowEditPage] = useState(false);
  
  const handleEditClick = () => {
    setShowEditPage(true);
  }

  return (
    <Container>
      <Wrapper>
        <MenuBar /> 
          <Main onEditClick={handleEditClick} />
          { showEditPage ? 
          <EditPage
              closeModal={closeModal}
              username={username}
              setUsername={setUsername}
              bio={bio}
              setBio={setBio}
              avatar={avatar}
              setAvatar={setAvatar}
              header={header}
              setHeader={setHeader}
            /> : null }
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
