import React from 'react';

import ProfilePage from '../ProfilePage';

import { useContext } from 'react';
import { MessageContext } from '../Layout';

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottomMenu, 
  HomeIcon, 
  SearchIcon,
  BellIcon, 
  EmailIcon } from './styles';

const Main: React.FC = () => {
  
  const { username } = useContext(MessageContext);
  
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{username}</strong>
          <span>777 Tweets</span>
        </ProfileInfo>
      </Header>

       <ProfilePage /> 

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main;
