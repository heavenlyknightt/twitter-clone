import React from 'react';

import Button from '../Button';

import { useContext } from 'react';
import { MessageContext } from '../Layout';

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

const MenuBar: React.FC = () => {
  
  const { username, avatar } = useContext(MessageContext);
  
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
          <img src={avatar ? URL.createObjectURL(avatar) : AvatarIMG} alt="Avatar escolhido pelo usuário" />
        </Avatar>

        <ProfileData>
          <strong>{username}</strong>
          <span>@Mercuryw1ng</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;
