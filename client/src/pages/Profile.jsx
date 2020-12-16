import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import wyncode from '../assets/images/wyncode.png';

const Profile = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center flex-column'>
        <h1 className='mt-4'>Your Profile</h1>
        <div className='mt-4'>
          <Image
            src={wyncode}
            alt='profile-picture'
            width={250}
            height={250}
            roundedCircle
          />
        </div>
        <div className='mt-4'>
          <form className='d-flex flex-column'>
            <input type='file' accept='image/*' />
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
            <p>User name goes here.</p>
          </div>
          <div className='d-flex'>
            <label htmlFor='email' className='pr-4 font-weight-bold'>
              Email:
            </label>
            <p>User email goes here</p>
          </div>
          <Button variant='danger'>Delete Account</Button>
        </div>
      </Container>
    </>
  );
};

export default Profile;
