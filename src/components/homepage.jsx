import React from 'react';
import { NavBar } from './nav-bar';
import MainPage from './events-list';
import PaginationJs from './pagination';
// import Routes from '../routes';

export class HomePage extends React.Component {
    render () {
        return (
            <div className="navigation-bar">
                <NavBar />
                <MainPage />
                <PaginationJs />
            </div>
        )
    }
}
