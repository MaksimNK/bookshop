import express from 'express';
import AuthService from '../service/authService.js';

import userService from '../util/userServiceInstance.js';

const router = express.Router();
const authService = new AuthService(userService);

router.post('/register', (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const newUser = authService.register({ name, surname, email, password });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/getall', (req, res) => {
    try {
        const users = userService.getAllUsers();
        res.status(201).json({ message: 'User registered successfully', users: users });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = authService.login(email, password);
        res.status(200).json({ message: 'Login successful', token, user });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/me', (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) throw new Error('Authorization token required');
        const user = authService.getUserBySessionToken(token);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

router.post('/logout', (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) throw new Error('Authorization token required');
        authService.logout(token);
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
