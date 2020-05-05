import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    const {name, image, developer, positive, negative} = props;

    return (
        <div style={{ display : 'flex', justifyContent : 'space-around' ,width: '75vw', height: '120px', background: '#121212', color: '#fff', 'boxSizing' : 'border-box', 'margin': '12px 4px', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)', 'fontSize' : '.9em', 'fontWeight' : '700', letterSpacing : '-0.05rem'}}>
            <div style={{ display: 'flex', flexDirection : 'column', justifyContent : 'space-around', height: '100%', 'boxSizing' : 'border-box', 'verticalAlign' : 'middle', float: 'left', 'borderRight' : '1px #333 solid', 'paddingLeft' : '8px', 'paddingRight' : '16px'}}>
                <img 
                    src={image}
                    alt={`Image of ${name}`}
                    style={{ width: '280px', height: '107.5px'}}
                />
            </div>
            <div style={{display: 'flex', flexDirection : 'column', justifyContent : 'space-around', width: '280px', height: '100%', 'boxSizing' : 'border-box'}}>
                <p>{name || 'UNKNOWN GAME NAME'}</p>
            </div>
            <div style={{ display: 'flex', flexDirection : 'column', justifyContent : 'space-around', width: '140px', height: '100%', 'boxSizing' : 'border-box'}}>
                <p>{developer}</p>
            </div>
            <div style={{ display: 'flex', flexDirection : 'column', justifyContent : 'space-around', width: '100px', height: '100%', 'boxSizing' : 'border-box', letterSpacing : '.05rem'}}>
                <div style={{ display: 'flex', flexDirection : 'row', justifyContent : 'space-around', width: '100px', 'boxSizing' : 'border-box'}}>
                    <FontAwesomeIcon style={{width: '1.4em', height: '1.4em', marginBlockStart : '1em', marginBlockEnd : '1em', color : 'rgba(75, 192, 192, .75)'}} icon={faThumbsUp} /><p>{positive}</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection : 'column', justifyContent : 'space-around', width: '100px', height: '100%', 'boxSizing' : 'border-box', letterSpacing : '.05rem'}}>
                <div style={{ display: 'flex', flexDirection : 'row', justifyContent : 'space-around', width: '100px', 'boxSizing' : 'border-box'}}>
                    <FontAwesomeIcon style={{width: '1.4em', height: '1.4em', marginBlockStart : '1em', marginBlockEnd : '1em', color : 'rgba(255, 99, 132, .75)'}} icon={faThumbsDown} /><p>{negative}</p>
                </div>
            </div>
        </div>
    );
}
