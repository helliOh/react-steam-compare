import React from 'react';

const SideNavHeader = () => {
    return (
        <div style={{position: 'fixed', width: '15vw', minHeight: '5vh', maxHeight: '5vh', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)', fontWeight: '700', fontSize: '1.2em', textAlign: 'center'}}>
            <span style={{color: '#fff', marginLeft: '.25em'}}> React Tutorial </span>
        </div>
    );
};

export default SideNavHeader;