import React from 'react';

const SideNav = () => {
    return (
        <nav style={{position: 'fixed', top: '7.5vh', width: '15vw', minHeight: '90vh', maxHeight: '90vh', display: 'inline-block', float : 'left', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
            <div style={{ 'height' : '4vh', lineHeight: '4vh', 'boxSizing' : 'border-box', 'marginBottom' : '4px', textAlign: 'center', borderBottom: '1px #333 solid', marginBottom:'12px', verticlaAlign: 'middle'}}>
            Menu
            </div>
            <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
                <a href="/" style={{display: 'block', width: '100%', height: '100%', background: 'transparent', border: 'none',  color: '#61dafb', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>게임 별</a>
            </div>
            <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
                <a href="/userview" style={{display: 'block', width: '100%', height: '100%', background: 'transparent', border: 'none',  color: '#61dafb', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>사용자 별</a>
            </div>
            <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
                <a href="/allview" style={{display: 'block', width: '100%', height: '100%', background: 'transparent', border: 'none',  color: '#61dafb', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>모든 게임</a>
            </div>
        </nav>   
    );
};

export default SideNav;