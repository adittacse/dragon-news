import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from './AuthContext';
import NewsDetailsLoading from '../pages/NewsDetailsLoading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <NewsDetailsLoading />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login" />
};

export default PrivateRoute;