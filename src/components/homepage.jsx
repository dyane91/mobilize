import React from 'react';
import MainPage from './mainpage';
import PaginationJs from './pagination';

export class HomePage extends React.Component {
    render () {
        return (
            <div className="navigation-bar">
                <MainPage />
                <PaginationJs />
            </div>
        )
    }
}
