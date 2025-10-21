import AuthContext from './AuthContext';
import { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authData = {
        user,
        setUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;