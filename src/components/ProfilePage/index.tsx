/* o useState será usado pelo script do botão */
import React, { useState, useContext } from 'react';

// import React, { useContext, useState } from 'react';

import Feed from '../Feed';
import EditPage from '../EditPage';

import { MessageContext } from '../Layout';

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

import AvatarPicture from '../Assets/Avatar.jpg';
import HeaderPicture from '../Assets/Header.jpg';

const ProfilePage: React.FC = (props) => {
  
  const { username, setUsername, bio, setBio } = useContext(MessageContext);

  const [showResults, setShowResults] = useState(false);
  // const [username, setUsername] = useState('Natanael Martins');
  // const [bio, setBio] = useState('Estudante de Sistemas de Informação :)');
  const [avatar, setAvatar] = useState<File | null>(null);
  const [header, setHeader] = useState<File | null>(null);
  const onClick = () => setShowResults(!showResults);
  const closeModal = () => setShowResults(false);
  
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={avatar ? URL.createObjectURL(avatar) : AvatarPicture} alt="Avatar escolhido pelo usuário" />
        </Avatar>
        <img src={header ? URL.createObjectURL(header) : HeaderPicture} alt="Header escolhida pelo usuário" />
      </Banner>

      <ProfileData>
       
        <div>
           { showResults ? (
             <EditPage
              closeModal={closeModal}
              avatar={avatar}
              setAvatar={setAvatar}
              header={header}
              setHeader={setHeader}
            />
         ) : (
           <EditButton outlined onClick={onClick}>Editar Perfil</EditButton>
         )}
        </div>

        <h1>{username ? username : 'Natanael Martins'}</h1>
        <h1>@Mercuryw1ng</h1>

        <p>
          {bio ? bio : 'Estudante de Sistemas de Informação :)'}
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
