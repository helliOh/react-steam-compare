const axios = require('axios');
const APIKey = require('../../config/steam.json').APIKey;

const baseUrl = "http://api.steampowered.com";

exports.getOwnedGames = async (userId) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            const url = `${baseUrl}/IPlayerService/GetOwnedGames/v0001?key=${APIKey}&steamid=${userId}&format=json`;
            console.log(`GET\t${url}...`);
            const response = await axios.get(url);
            let games = response.data.response.games;
            resolve(games);
        }
        catch(e){
            reject(e);
        }
    })
}