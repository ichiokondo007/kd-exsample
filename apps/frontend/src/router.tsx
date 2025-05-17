import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import { Routes as AppRoutes } from '@kd-exsample/shared';

function RouterConfig() {
    return (
        <Router>
            <ReactRoutes>
                <Route path={AppRoutes.LOGIN} element={<Login />} />
            </ReactRoutes>
        </Router>
    );
}

export default RouterConfig;