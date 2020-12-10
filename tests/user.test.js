const request = require('supertest'),
  app = require('../server/app'),
  User = require('../server/db/models/user');

const { userOne, userOneId, setUpDatabase } = require('./fixtures/db');

beforeEach(setUpDatabase);

describe('users', () => {
  it('should sign up a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Leo',
        email: 'leo@leo.com',
        password: 'remember',
      })
      .expect(201);

    const user = await User.findById(response.body._id);
    expect(user).not.toBeNull();

    expect(user.name).toBe('Leo');
    expect(user.email).toBe('leo@leo.com');
    expect(user.password).not.toBe('remember');
  });

  it('should log in a user', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: userOne.email,
        password: userOne.password,
      })
      .expect(200);
    expect(response.body.token).toBe(undefined);
  });

  it('should NOT log in a non-existent user', async () => {
    await request(app)
      .post('/api/users/login')
      .send({
        email: 'IAMAMADEUPEMAIL@FAKENEWS.COM',
        password: 'THISPASSWORDSUCKS',
      })
      .expect(400);
  });
});
