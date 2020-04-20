import React, {useState, useEffect} from 'react';
import CardBoard from './Components/CardBoard'

export default function App() {
  return (
    <div style={{ width: '100vw', maxWidth: '1680px', height: 'auto', background: '#1e1f26', color: '#fff', 'boxSizing' : 'border-box', 'padding': '10px 30px', 'float' : 'right', marginBottom : '10px',  color: '#61dafb'}}>
      <div style={{position: 'fixed', width: '20%', minHeight: '5vh', maxHeight: '5vh', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)', fontWeight: '700', fontSize: '1.2em'}}>
        <span style={{color: '#fff', marginLeft: '.25em'}}>DevHelli - React Tutorial</span>
      </div>
      <nav style={{position: 'fixed', top: '7.5vh', width: '20%', minHeight: '90vh', maxHeight: '90vh', display: 'inline-block', float : 'left', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
      <div style={{ 'height' : '4vh', lineHeight: '4vh', 'boxSizing' : 'border-box', 'marginBottom' : '4px', textAlign: 'center', borderBottom: '1px #333 solid', marginBottom:'12px', verticlaAlign: 'middle'}}>
        Menu
      </div>
        <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
          <button style={{width: '100%', height: '100%', background: 'transparent', border: 'none',  color: '#61dafb', fontWeight: '700'}}>게임 별</button>
        </div>
        <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
          <button style={{width: '100%', height: '100%', background: 'transparent', border: 'none',  color: '#61dafb', fontWeight: '700'}}>사용자 별</button>
        </div>
        <div style={{'height' : '5vh', lineHeight: '5vh', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'marginBottom' : '10px', background: '#121212', 'border' : '1px #333 solid', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
          <button style={{width: '100%', height: '100%', background: 'transparent', border: 'none',  color: '#61dafb', fontWeight: '700'}}>모든 게임</button>
        </div>
      </nav>
      <div style={{ width: '77.5%', display: 'inline-block', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', marginLeft: '22.5%', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
        <CardBoard />
      </div>
    </div>
  );
}
