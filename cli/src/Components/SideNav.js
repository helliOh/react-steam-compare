import React from 'react';
import { NavLink } from 'react-router-dom';

const isActive = (path, match, location) => !!(path === location.pathname);

const SideNav = () => {
    return (
        <nav style={{position: 'fixed', top: '7.5vh', width: '15vw', minHeight: '90vh', maxHeight: '90vh', display: 'inline-block', float : 'left', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
            <div style={{ 'height' : '4vh', lineHeight: '4vh', 'boxSizing' : 'border-box', 'marginBottom' : '4px', textAlign: 'center', borderBottom: '1px #333 solid', marginBottom:'12px', verticlaAlign: 'middle', fontWeight: '700'}}>
            Menu
            </div>
            <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
                <NavLink to="/" style={{display: 'block', width: '100%', height: '100%', background: 'transparent', border: 'none', fontWeight: '700', color : '#fff', textDecoration: 'none', textAlign: 'center'}}
                activeStyle={{color: '#61dafb', fontSize:'1.1em'}}
                isActive={isActive.bind(this, '/')}>게임 별</NavLink>
            </div>
            <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
                <NavLink to="/userview" style={{display: 'block', width: '100%', height: '100%', background: 'transparent', border: 'none', fontWeight: '700', color : '#fff', textDecoration: 'none', textAlign: 'center'}} 
                activeStyle={{color: '#61dafb', fontSize:'1.1em'}}
                isActive={isActive.bind(this, '/userview')}>사용자 별</NavLink>
            </div>
            <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
                <NavLink to="/allview" style={{display: 'block', width: '100%', height: '100%', background: 'transparent', border: 'none', fontWeight: '700', color : '#fff', textDecoration: 'none', textAlign: 'center'}} 
                activeStyle={{color: '#61dafb', fontSize:'1.1em'}}
                isActive={isActive.bind(this, '/allview')}>모든 게임</NavLink>
            </div>
        </nav>   
    );
};

export default SideNav;