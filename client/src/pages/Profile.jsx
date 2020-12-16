import React, { useContext, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import wyncode from '../assets/images/wyncode.png';
import Navigation from '../components/Navigation';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Profile = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);

    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secureURL });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSelect = e => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleDelete = async e => {
    setLoading(true);
    try {
      await axios({
        method: 'DELETE',
        url: '/api/users',
        withCredentials: true,
      });
      setLoading(false);
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation />
      <Container className='d-flex justify-content-center align-items-center flex-column'>
        <h1 className='mt-4'>Your Profile</h1>
        <div className='mt-4'>
          <Image
            src={
              preview
                ? preview
                : currentUser?.avatar
                ? currentUser.avatar
                : wyncode
            }
            alt='profile-picture'
            width={250}
            height={250}
            roundedCircle
          />
        </div>
        <div className='mt-4'>
          <form className='d-flex flex-column' onSubmit={handleSubmit}>
            <input type='file' accept='image/*' onChange={handleImageSelect} />
            <Button type='submit' size='sm' className='mt-4'>
              Save Image
            </Button>
          </form>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
          <div className='d-flex '>
            <label htmlFor='name' className='pr-4 font-weight-bold'>
              Name:
            </label>
            <p>{currentUser?.name}</p>
          </div>
          <div className='d-flex'>
            <label htmlFor='email' className='pr-4 font-weight-bold'>
              Email:
            </label>
            <p>{currentUser?.email}</p>
          </div>
          <Button variant='danger' onClick={handleDelete}>
            Delete Account
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Profile;
