import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Card(props) {
    const {Users} = props;

    return (
        <div style={{ width: '800px', height: '720px', background: '#121212', color: '#fff', 'boxSizing' : 'border-box', 'margin': '12px 4px', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
            <div style={{ height: '60px', padding: '4px 8px', 'boxSizing' : 'border-box', 'fontSize' : '1.25em', 'fontWeight' : '700' }}>
                <p style={{ position : 'relative', bottom : '0', margin : '10px 4px'}}> Meta Data </p>
            </div>
            <div style={{ width : '100%', height : '660px', boxSizing : 'border-box', display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', borderTop : '1px #333 solid'}}>
                <div style={{ width: '45%', height: '45%', boxSizing : 'border-box', marginLeft : '10px', marginRight: '10px', marginTop : '20px', border: '1px #333 solid'}}>
                    <Bar
                        data={{
                            labels: [...Users.map( user => user.nickname)],
                            datasets: [{
                                label: 'Playtime(hours)',
                                data: Users.map( user => Math.floor(user.Statistics.totalPlaytime/60)),
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
                                        min: 0
                                    }
                                }]
                            }
                        }}
                    />
                </div>
                <div style={{ width: '45%', height: '45%', boxSizing : 'border-box', marginLeft : '10px', marginRight: '10px', marginTop : '20px', border: '1px #333 solid'}}>
                    <Bar
                        data={{
                            labels: [...Users.map( user => user.nickname)],
                            datasets: [{
                                label: 'Owned Game',
                                data: Users.map( user => user.Statistics.gameCount),
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
                                        min: 0
                                    }
                                }]
                            }
                        }}
                    />
                </div>
                <div style={{ width: '45%', height: '45%', boxSizing : 'border-box', marginLeft : '10px', marginRight: '10px', marginTop : '20px', marginBottom: '20px' ,border: '1px #333 solid'}}>
                    <Bar
                        data={{
                            labels: [...Users.map( user => user.nickname)],
                            datasets: [{
                                label: 'Value of Library($)',
                                data: Users.map( user => user.Statistics.totalPrice),
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
                                        min: 0
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
