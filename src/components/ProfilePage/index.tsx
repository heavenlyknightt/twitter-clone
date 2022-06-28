import React from 'react';

import Feed from '../Feed';

/* Importei todos os componentes que serão usados nesta seção */
import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src="https://telegra.ph/file/2861a8a4acfe5e93c99f2.jpg" alt="Natanael Martins"/>
        </Avatar>
        <img src="https://telegra.ph/file/17e5cd9e0722d4163d7b0.jpg" alt="twitter header" />
      </Banner>

      <ProfileData>
        <EditButton onclick="myFunction()">Editar Perfil</EditButton>

        <h1>Natanael Martins</h1>
        <h1>@Mercuryw1ng</h1>

        <p>
          Estudante de Sistemas de Informação :)
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
