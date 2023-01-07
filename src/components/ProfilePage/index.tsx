/* o useState será usado pelo script do botão */
import React, { useState } from 'react';

import Feed from '../Feed';
import EditPage from '../EditPage';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon,
  Followage,
  EditButton,
  Header,
  Background
} from './styles';

import AvatarPicture from '../Assets/Avatar.jpg';
import HeaderPicture from '../Assets/Header.jpg';

interface Props {
  onEditClick: () => void;
}

const ProfilePage: React.FC<Props> = (props) => {
  const { onEditClick } = props;
  /*
  
  */
  
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={AvatarPicture} alt="Avatar escolhido pelo usuário" />
        </Avatar>
        <img src={HeaderPicture} alt="Header escolhida pelo usuário" />
      </Banner>

      <ProfileData>
       
        <div>
          <EditButton outlined onClick={onEditClick}>Editar Perfil</EditButton>
        </div>

        <h1>{'Natanael Martins'}</h1>
        <h1>@Mercuryw1ng</h1>

        <p>
          {'Estudante de Sistemas de Informação :)'}
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido em 29 de agosto de 2001
          </li>
        </ul>

        <Followage>
          {/* Optei por usar as entidades &ensp; e &emsp; para o espaçamento */}
          <span>
            <strong>10&ensp;</strong>seguindo
          </span>
          <span>
            <strong>&emsp;60</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
