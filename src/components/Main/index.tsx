import React from 'react';
import { useSelector } from 'react-redux';
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

const Main: React.FC = () => {
  
  const username = useSelector((state) => state.user.username);
  const bio = useSelector((state) => state.user.bio);
  const avatar = useSelector((state) => state.user.avatar);
  const header = useSelector((state) => state.user.header);
  
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

       <ProfilePage 
         onEditClick={() => dispatch(setModalOpen(true))}
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
