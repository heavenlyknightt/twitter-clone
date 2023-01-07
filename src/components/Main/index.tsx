import React from 'react';

import ProfilePage from '../ProfilePage';

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

interface Props {
  onEditClick: () => void;
  username: string;
  bio: string;
  avatar: File | null | undefined;
  header: File | null | undefined;
}

const Main: React.FC<Props> = (props) => {
  
  const { onEditClick, username, bio, avatar, header } = props;
  
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Natanael Martins</strong>
          <span>777 Tweets</span>
        </ProfileInfo>
      </Header>

       <ProfilePage 
         onEditClick={onEditClick} 
         username={username}
         bio={bio}
         avatar={avatar}
         header={header}
        /> 

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
