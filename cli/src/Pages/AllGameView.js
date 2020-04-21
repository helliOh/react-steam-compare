import React from 'react';
import { CardBoard, SideNav, SideNavHeader } from '../Components'

const UserView = () => {
    return (
        <div style={{ width: '100vw', minHeight: '100vh', height: 'auto', background: '#1e1f26', color: '#fff', 'boxSizing' : 'border-box', 'padding': '10px 30px', 'float' : 'right', marginBottom : '10px'}}>
            <SideNavHeader />
            <SideNav />
            <div style={{ width: '80vw', display: 'inline-block', float: 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
            <div style={{borderBottom : '1px #333 solid'}}> Hi AllGameView </div>
                Hi AllGameView
            </div> 
        </div>
    );
};

export default UserView;