/* import React, { useState } from 'react'; */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setBio, setAvatar, setHeader } from './actions';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';
import EditPage from '../EditPage';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  
  const username = useSelector((state) => state.user.username);
  const bio = useSelector((state) => state.user.bio);
  const avatar = useSelector((state) => state.user.avatar);
  const header = useSelector((state) => state.user.header);
  const modalOpen = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(setModalOpen(true));
  }

  const handleSave = (username, bio, avatar, header) => {
    dispatch(setUsername(username));
    dispatch(setBio(bio));
    dispatch(setAvatar(avatar));
    dispatch(setHeader(header));
    dispatch(setModalOpen(false));
  }
  
  return (
    <Container>
      <Wrapper>
        <MenuBar
          username={username}
          bio={bio}
          avatar={avatar}
          header={header}
          /> 
          <Main 
            onEditClick={handleEditClick}
            />
          { modalOpen ? 
          <EditPage
            closeModal={() => dispatch(setModalOpen(false))}
            username={username}
            bio={bio}
            avatar={avatar}
            header={header}
            onSave={handleSave}
          /> : null }
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
