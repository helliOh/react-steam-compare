const Steam = require('./steam');
const Steamspy = require('./steamspy');
const fs = require('fs');

exports.loadGameData = async () =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let data = await Steamspy.downloadDatabase();
            resolve(data);
        }
        catch(e){
           reject(e);
        }
    });
}

exports.loadUserData = async () =>{
    return new Promise(async (resolve, reject) =>{
        try{
            const Users = [
                {
                    nickname : "Sept9",
                    steamid : "76561198797840744"
                },
                {
                    nickname : "11janghwan",
                    steamid : "76561198002434976"
                },
                {
                    nickname : "kjw0411",
                    steamid : "76561198319923340"
                },
                {
                    nickname : "Hellikiam",
                    steamid : "76561198362982996"
                },
                {
                    nickname : "vgb000123",
                    steamid : "76561198428251273"
                }
            ];
            
            resolve(Users);
        }
        catch(e){
           reject(e);
        }
    });
}

exports.loadGameLibrary = async (steamid) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let data = await Steam.getOwnedGames(steamid);
            resolve(data);
        }
        catch(e){
           reject(e);
        }
    });
}

