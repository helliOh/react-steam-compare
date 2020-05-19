import React from 'react';
import { SideNav, SideNavHeader } from '../Components'
import { GameCardBoardContainer } from '../Components/Containers'

const GameView = () => {
    return (
        <div style={{ width: '100vw', minHeight: '100vh', height: 'auto', background: '#1e1f26', color: '#fff', 'boxSizing' : 'border-box', 'padding': '10px 30px', 'float' : 'right'}}>
            <SideNavHeader />
            <SideNav />
            <GameCardBoardContainer />
        </div>
    );
};

export default GameView;