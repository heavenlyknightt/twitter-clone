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
}

const Main: React.FC<Props> = (props) => {
  
  const { onEditClick } = props;
  
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

       <ProfilePage onEditClick={onEditClick} /> 

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
