import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Card(props) {
    const {name, image, developer, average_forever, Owners} = props;

    return (
        <div style={{ width: '800px', height: '300px', background: '#121212', color: '#fff', 'boxSizing' : 'border-box', 'margin': '12px 4px', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
            <div style={{ height: '20%', padding: '4px 8px', 'boxSizing' : 'border-box', 'fontSize' : '1.25em', 'fontWeight' : '700' }}>
                <p style={{ position : 'relative', bottom : '0', margin : '10px 4px'}}> {name} </p>
            </div>
            <div style={{ width : '100%', height : '80%', 'boxSizing' : 'border-box', 'display' : 'inline-block', 'borderTop' : '1px #333 solid'}}>
                <div style={{ display: 'inline-block', height: '100%', 'boxSizing' : 'border-box', 'verticalAlign' : 'middle', float: 'left', 'borderRight' : '1px #333 solid', 'paddingLeft' : '8px', 'paddingRight' : '16px'}}>
                    <div style={{width : '280px', 'margin' : '12px 0px', fontSize : '1.25em', fontWeight: '700'}}>
                        <img 
                            src={image}
                            style={{ width: '280px', height: '107.5px',}}
                        />
                        {developer}
                    </div>
                </div>
                <div style={{ display: 'inline-block', height: '100%', 'boxSizing' : 'border-box', 'marginLeft' : '10px', float: 'left'}}>
                    <Bar
                        data={{
                            labels: ['Avg.', ...Owners.map( owner => owner.User.nickname)],
                            datasets: [{
                                label: 'Playtime(hours)',
                                data: [Math.floor(average_forever/60), ...Owners.map( owner => Math.floor(owner.playtime_forever/60) )],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1,
                            }]
                        }}
                        width={400}
                        height={50}
                        options={{ 
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        max: 4 * Math.floor(average_forever/60),
                                        min: 0,
                                        stepSize: Math.floor(average_forever/60)
                                    }
                                }]
                            }
                        }}
                    />
                    
                </div>
            </div>
        </div>
    );
}
