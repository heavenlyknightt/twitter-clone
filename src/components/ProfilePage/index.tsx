/* o useState será usado pelo script do botão */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Feed from '../Feed';
/* import EditPage from '../EditPage'; */

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

const ProfilePage: React.FC = () => {
  
  const username = useSelector((state) => state.user.username);
  const bio = useSelector((state) => state.user.bio);
  const avatar = useSelector((state) => state.user.avatar);
  const header = useSelector((state) => state.user.header);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={avatar} alt="Avatar escolhido pelo usuário" />
        </Avatar>
        <img src={header} alt="Header escolhida pelo usuário" />
      </Banner>

      <ProfileData>
       
        <div>
          <EditButton outlined onClick={() => dispatch(setModalOpen(true))}>Editar perfil</EditButton>
        </div>

        <h1>{username}</h1>
        <h1>@Mercuryw1ng</h1>

        <p>
          {bio}
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
