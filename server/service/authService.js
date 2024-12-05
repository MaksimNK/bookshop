export default class AuthService {

    constructor(userService) {
        this.userService = userService;
        this.sessions = new Map();
    }

    register(userData) {
        if(this.userService.existEmail(userData.email)) throw new Error('User with this email already exist');
        const newUser = this.userService.addUser(userData);
        console.log('New user added:', newUser);
        
        return newUser;
    }

    login(email, password) {
        const user = this.userService.getUserByEmail(email);
        if (!user) {
            throw new Error('Invalid email or password');
        }

        if (user.password !== password) {
            throw new Error('Invalid email or password');
        }

        const sessionToken = `${user.id}-${Date.now()}`;
        this.sessions.set(sessionToken, user.id);

        return { token: sessionToken, user };
    }


    getUserBySessionToken(token) {
        const userId = this.sessions.get(token);
        if (!userId) {
          throw new Error('Invalid or expired session token.');
        }
        return this.userService.getUserById(userId);
    }

    logout(token) {
        if (!this.sessions.has(token)) {
          throw new Error('Invalid session token.');
        }
        this.sessions.delete(token);
    }
    
}