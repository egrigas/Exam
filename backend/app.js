import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODB_URL =
  'mongodb+srv://useris:useris123@cluster0.kbnhkj1.mongodb.net/exam?retryWrites=true&w=majority';

// Middlewares
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.log('Error connecting to MongoDB: ' + e));

import User from './models/user.model.js';

// Routes
// GET | returns all users from MongoDB  (ID, name, surname, email, age)
app.get('/api/users', (_req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((e) => console.log(e));
});

// POST | post users in MongoDB  (name, surname, email, age)
app.post('/api/users', async (req, res) => {
  const newUserData = req.body;
  const user = new User(newUserData);

  // check for email availability
  const emailExists = await User.findOne({ email: newUserData.email });
  if (emailExists) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  user
    .save()
    .then((data) => {
      res.status(201).json({ message: 'User created', user: data });
    })
    .catch((e) => console.log(e));
});

// PUT | update users in MongoDB
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const updateUserData = req.body;

  User.findByIdAndUpdate(userId, updateUserData)
    .then((updatedUser) => {
      if (updatedUser) {
        res.status(200).json({ message: 'User updated', user: updatedUser });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((e) => console.log(e));
});

// DELETE | delete users from MongoDB
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (deletedUser) {
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((e) => console.log(e));
});

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));
