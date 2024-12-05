import express from 'express';

import userService from '../util/userServiceInstance.js';

const router = express.Router();


router.post('/', (req, res) => {
    try {
      const newUser = userService.addUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get('/', (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
    console.log(users);
  });
  

  
  router.get('/:id', (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  });
  
  router.put('/:id', (req, res) => {
    try {
      const updatedUser = userService.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
  
  router.delete('/:id', (req, res) => {
    try {
      userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
  
  router.post('/:id/favorites', (req, res) => {
    try {
      userService.addFavoriteBook(req.params.id, req.body);
      res.status(200).json({ message: 'Favorite book added successfully.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
  
  router.post('/:id/purchases', (req, res) => {
    try {
      userService.addPurchasedBook(req.params.id, req.body);
      res.status(200).json({ message: 'Purchased book added successfully.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
  
export default router;