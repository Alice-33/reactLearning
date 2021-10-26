import React from 'react';
import { Route } from 'react-router-dom';
import Hello from '../components/Hello';
class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Route path='/home' component={Hello} />
            </div>
        );
    }
}

export default AppRouter;