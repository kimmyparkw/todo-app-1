const mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  User = require('../../server/db/models/user'),
  Task = require('../../server/db/models/task');

afterAll(async () => {
  await mongoose.connection.close();
});

const userOneId = new mongoose.Types.ObjectId();
const userTwoId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: 'Leo Test',
  email: 'test@test.com',
  password: 'testpass',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const userTwo = {
  _id: userTwoId,
  name: 'Second User',
  email: 'second@gmail.com',
  password: 'testpass',
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'My first test task',
  completed: false,
  owner: userOneId,
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'My second test task',
  completed: true,
  owner: userOneId,
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: 'My third test task',
  completed: true,
  owner: userTwoId,
};

const setUpDatabase = async () => {
  // coming soon to a code base near you

  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  setUpDatabase,
  userOne,
  userOneId,
  userTwo,
  userTwoId,
  taskOne,
  taskTwo,
  taskThree,
};
