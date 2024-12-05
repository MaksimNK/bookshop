import { v4 as uuidv4 } from 'uuid';

class UserService {
    constructor() {
        this.users = new Map();
    }

    getAllUsers() {
        console.log(this.users);
        return Array.from(this.users.values());
    }

    addUser(user) {
        const userId = uuidv4();
        const newUser = { id: userId, ...user };
        this.users.set(userId, newUser);
        console.log('New user added:', newUser);
        console.log(this.getAllUsers());
        console.log(this.users);
        return newUser;
    }

    getUserById(userId) {
        return this.users.get(userId);
    }

    existEmail(email) {
        for (const user of this.users.values()) {
            if (user.email === email) {
                return true;
            }
        }
        return false;
    }

    addPurchasedBook(userId, book) {
        const user = this.getUserById(userId);
        if (!user) {
            throw new Error('User not found.');
        }
        user.purchased = user.purchased || [];
        user.purchased.push(book);
        this.users.set(userId, user);
    }

    addFavoriteBook(userId, book) {
        const user = this.getUserById(userId);
        if (!user) {
            throw new Error('User not found.');
        }
        user.favorites = user.favorites || [];
        user.favorites.push(book);
        this.users.set(userId, user);
    }

    updateUser(userId, updatedFields) {
        const user = this.getUserById(userId);
        if (!user) {
            throw new Error('User not found.');
        }
        const updatedUser = { ...user, ...updatedFields };
        this.users.set(userId, updatedUser);
        return updatedUser;
    }

    deleteUser(userId) {
        const user = this.getUserById(userId);
        if (!user) {
            throw new Error('User not found.');
        }
        this.users.delete(userId); // Исправлено
    }

    getUserByEmail(email) {
        for (const user of this.users.values()) { // Исправлено
            if (user.email === email) {
                return user;
            }
        }
        return null;
    }
}

export default UserService;
