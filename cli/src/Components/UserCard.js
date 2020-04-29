import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Card(props) {
    const {Library, nickname} = props;

    const top10Games = Library.slice(0, 10).map((game) => {
        return {
            playtime_forever : Math.floor(game.playtime_forever/60), 
            ...game.Game
        }
    });

    const allGames = Library.map((game) => {
        return {
            playtime_forever : Math.floor(game.playtime_forever/60), 
            ...game.Game
        }
    });

    /*
        User.Library.slice(0, 10) -> make doughnut chart
        User.Library.map(game => <tr><td>gameName</td><td>playTime</td></tr>)
    */
    return (
        <div style={{ width: '800px', height: 'auto', background: '#121212', color: '#fff', 'boxSizing' : 'border-box', 'margin': '12px 4px', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
            <div style={{ height: '60px', padding: '4px 8px', 'boxSizing' : 'border-box', 'fontSize' : '1.25em', 'fontWeight' : '700' }}>
                <p style={{ position : 'relative', bottom : '0', margin : '10px 4px'}}> {nickname} </p>
            </div>
            <div style={{ width : '100%', height : 'auto', 'boxSizing' : 'border-box', 'display' : 'inline-block', 'borderTop' : '1px #333 solid'}}>
                <div style={{width: '100%', display : 'flex', flexDirection: 'column', flexWrap : 'wrap', margin : '10px 0'}}>
                    <div style={{display : 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom : '10px'}}>
                        <div style={{width : '50%', padding: '4px 8px'}}>
                            <Doughnut
                                data={{
                                    labels: top10Games.map(game => game.name),
                                    datasets: [{
                                        label: 'Playtime(hours)',
                                        data: top10Games.map(game => game.playtime_forever),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)',
                                            'rgb(102, 181, 19, 0.2)',
                                            'rgb(92, 165, 221, 0.2)',
                                            'rgb(250, 40, 162, 0.2)',
                                            'rgb(250, 252, 120, 0.2)',
                                            'rgb(67, 59, 246, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)',
                                            'rgb(102, 181, 19, 1)',
                                            'rgb(92, 165, 221, 1)',
                                            'rgb(250, 40, 162, 1)',
                                            'rgb(250, 252, 120, 1)',
                                            'rgb(67, 59, 246, 1)'
                                        ],
                                        borderWidth: 1,
                                    }]
                                }}
                                width={300}
                                height={300}
                                options={{
                                    maintainAspectRatio: false,
                                    legend : {
                                        display: false,
                                    },
                                    scales: {
                                        ticks : {
                                            display: false
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div style={{width : '50%', padding: '4px 8px'}}>
                            <table style={{width: '100%', border: '1px #333 solid', tableLayout: 'fixed'}}>
                                <thead>
                                    <tr>
                                        <th style={{border: '1px #333 solid', width: '20%'}}>#</th>
                                        <th style={{border: '1px #333 solid', width: '50%'}}>name</th>
                                        <th style={{border: '1px #333 solid', width: '30%'}}>playtime(hr)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {top10Games && top10Games.map((game, index) => {
                                        return(
                                            <tr style={{width: '100%', border: '1px #333 solid'}} key={7 * game.id * index * 17}>
                                                <td style={{border: '1px #333 solid', width: '20%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{ index+1 }</td>
                                                <td style={{border: '1px #333 solid', width: '50%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{ game.name }</td>
                                                <td style={{border: '1px #333 solid', width: '30%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{ game.playtime_forever }</td>
                                            </tr>
                                        )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{width : '100%', borderTop: '1px #333 solid', marginBottom: '10px'}}>
                        <div style={{margin : '4px 8px', paddingTop: '20px'}}>
                            <table style={{width: '100%', border: '1px #333 solid', tableLayout: 'fixed'}}>
                                <thead>
                                    <tr>
                                        <th style={{border: '1px #333 solid', width: '20%'}}>#</th>
                                        <th style={{border: '1px #333 solid', width: '50%'}}>name</th>
                                        <th style={{border: '1px #333 solid', width: '30%'}}>playtime(hr)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allGames && allGames.map((game, index) => {
                                        return(
                                            <tr style={{width: '100%', border: '1px #333 solid'}} key={3 * game.id * index * 19}>
                                                <td style={{border: '1px #333 solid', width: '20%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{ index+1 }</td>
                                                <td style={{border: '1px #333 solid', width: '50%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{ game.name }</td>
                                                <td style={{border: '1px #333 solid', width: '30%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{ game.playtime_forever }</td>
                                            </tr>
                                        )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
