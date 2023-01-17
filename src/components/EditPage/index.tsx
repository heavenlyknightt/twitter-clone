import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  Container,   
  CloseIcon,
  EditButton,
  BannerDiv,
  BannerLabel,
  AvatarLabel,
  Header,
  SaveButton,
  Background,
  PhotoIcon,
  EditData,
  Form,
  FormInput,
  FormLabel
} from './styles';

import AvatarIMG from '../Assets/Avatar.jpg';
import HeaderIMG from '../Assets/Header.jpg';

const EditPage: React.FC = () => {
  
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const bio = useSelector((state) => state.user.bio);
  const avatar = useSelector((state) => state.user.avatar);
  const header = useSelector((state) => state.user.header);
  const [localUsername, setLocalUsername] = useState(username);
  const [localBio, setLocalBio] = useState(bio);
  const [localAvatar, setLocalAvatar] = useState(avatar);
  const [localHeader, setLocalHeader] = useState(header);
  
  const handleSave = () => {
    dispatch(setUsername(localUsername));
    dispatch(setBio(localBio));
    if (localAvatar !== undefined) dispatch(setAvatar(localAvatar));
    if (localHeader !== undefined) dispatch(setHeader(localHeader));
    dispatch(setModalOpen(false));
  }
  
    return (
    <div>
     <Background>
      <EditData>
       <Header>
      
        <button>
        <CloseIcon onClick={() => dispatch(setModalOpen(false))} />
        </button>
        <h3 style={{marginLeft: "20px"}}>Editar perfil</h3>
        <SaveButton outlined onClick={handleSave}>Salvar</SaveButton>
         
        </Header>
        
        <Container>
          <BannerDiv>
              <AvatarLabel htmlFor="avatar">
                <FormInput
                  type="file"
                  id="avatar"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    if (event.target.files && event.target.files.length > 0) {
                      setLocalAvatar(event.target.files[0]);
                     }
                  }}
                />
                <img src={localAvatar ? URL.createObjectURL(localAvatar) : AvatarIMG} alt="Avatar escolhido pelo usuário" />
              </AvatarLabel>
              <PhotoIcon />
            <BannerLabel htmlFor="header">
            <FormInput
              type="file"
              id="header"
              style={{ display: "none" }}
              onChange={(event) => {
                    if (event.target.files && event.target.files.length > 0) {
                      setLocalHeader(event.target.files[0]);
                     }
                  }}
            />
            <img src={localHeader ? URL.createObjectURL(localHeader) : HeaderIMG} alt="Header escolhido pelo usuário" />
          </BannerLabel>
          <PhotoIcon />
        </BannerDiv>
      </Container>
        
        <Form>
          <FormInput
          maxLength={160}
          value={localUsername}
          onChange={(event) => setLocalUsername(event.target.value)}
          />
          <FormLabel>Nome</FormLabel>
        </Form>
        
        <Form>
          <FormInput 
           style={{padding: "35px 10px 55px 10px"}} 
           maxLength={160} 
           value={localBio}
           onChange={(event) => setLocalBio(event.target.value)}
           />
          <FormLabel>Bio</FormLabel>
        </Form>
        
        <Form>
          <FormInput maxLength={160} />
          <FormLabel>Localização</FormLabel>
        </Form>
        
        <Form>
          <FormInput style={{padding: "35px 10px 55px 10px"}} maxLength={160} />
          <FormLabel>Site</FormLabel>
        </Form>
      </EditData>
     </Background>
    </div>
    );
  };
       
export default EditPage;
