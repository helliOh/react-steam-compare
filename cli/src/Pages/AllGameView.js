import React from 'react';
import { AllCardBoard, SideNav, SideNavHeader } from '../Components'

const UserView = () => {
    return (
        <div style={{ width: '100vw', minHeight: '100vh', height: 'auto', background: '#1e1f26', color: '#fff', 'boxSizing' : 'border-box', 'padding': '10px 30px', 'float' : 'right', marginBottom : '10px'}}>
            <SideNavHeader />
            <SideNav />
            <AllCardBoard />
        </div>
    );
};

export default UserView;