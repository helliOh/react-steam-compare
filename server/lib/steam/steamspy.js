const fs = require('fs');
const axios = require('axios');

const baseUrl = "https://steamspy.com/api.php";

exports.downloadDatabase = async (appid) => {
    return new Promise(async (resolve, reject) => {
        try{
            const url = `${baseUrl}?request=all`;
            console.log('Steamspy:\tDownloading game information...');
            console.log(`GET\t${url}...`)

            let database = await axios.get(url);
            database = database.data;
            
            let buffer = [];
            for(i in database){
                let data = database[i];
                data.image = `https://steamcdn-a.akamaihd.net/steam/apps/${data.appid}/header.jpg`;
                buffer.push(data);
            }
            console.log(`Steamspy:\t${ buffer.length } of game info. is downloaded...\tTotal ${Math.floor(JSON.stringify(buffer).length / (1000 * 1000))} MB`);

            fs.writeFileSync('./games.json', JSON.stringify({ Games : buffer}));
            resolve();
        }
        catch(e){
            reject(e);
        }
    });
}
