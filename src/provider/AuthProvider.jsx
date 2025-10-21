import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthContext from './AuthContext';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authData = {
        user,
        setUser,
        createUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;