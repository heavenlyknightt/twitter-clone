import React from 'react';

import Button from '../Button';

import { 
  Container, 
  Topside, 
  Logo, 
  MenuButton, 
  HomeIcon, 
  BellIcon, 
  EmailIcon, 
  FavoriteIcon, 
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

import AvatarPicture from '../Assets/Avatar.jpg';
import HeaderPicture from '../Assets/Header.jpg';

interface Props {
  username: string;
  bio: string;
  avatar: File | null | undefined;
  header: File | null | undefined;
}

const MenuBar: React.FC<Props> = (props) => {
  
  const { username, bio, avatar, header } = props;
  
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
        <img src={avatar ? URL.createObjectURL(avatar) : AvatarPicture} alt="Avatar escolhido pelo usuário"/>
        </Avatar>

        <ProfileData>
          <strong>{username ? username : 'Natanael Martins'}</strong>
          <span>@Mercuryw1ng</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;
