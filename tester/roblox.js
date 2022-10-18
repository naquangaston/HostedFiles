var noblox = require("noblox.js")
var { argv, mainModule } = require('process')
var path = mainModule.path
var fs = require("fs")
var token = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_1893234D1C27D1753E2019305C81B4733B1C5F09085C81FFC67DB9206E11B535DF55B61811F80E62AA73733B1AABAA5397A23DDB1727CB9566A8139FC047BE7CCE4AD19A88BE066585EFFCA283DDF7203AB3E85FECA9B7DF39D5F529A547D43A2BEAAEAD74C6AE600188CAC6FC01E36D0F8AE472A9BF048F01710B07724C7847185512E22B2253F4BE11E6A5FD394E266D8FF92CDF5CC9CE4A5A4EA1D21F1AA4C1606BB0CC1D522F3F9834893A23D13FF9C90451BF6C95E1E0DE55CA736CD0EC7528ED97A26275431EC27920346966E05B4CCD15E2149DE7233DD96C974045CAC811DF99F5E90360350A1521754E3B2CD834CD347F76AF7659F60BD04442CB8F8FDD1A2FAC850157882EAAC9EAA0BF1C7F63857C547E00E748E8CB1A4EC2953123E6109A253F61A3DE665643D3EA3DB4D289A993A0F6FAA1E1C010AAF62E4F7BCEC478596D40D48CDD96F4CD822D196B48184CC03D9D92FE3C02FFFD070A5D8A46BF1D6D737F9DC536EACD4A9D66172336E2398266AB7539FA1BF1ED5B0BA9377DE24891"
Array.prototype.forEachAsync = async function (f) {
    var a = []
    for (let i = 0; i < this.length; i++) { a.push(await f(this[i], i)) }
}
function newLine(length = 1) { for (let i = 0; i < length; i++) { console.log('') } }
!async function () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    console.log('logging in')
    const currentUser = await noblox.setCookie(token)
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    var friends = (await noblox.getFriends(currentUser.UserID)).data
    var online = [], offline = [], deleted = []
    //console.log(friends)
    newLine(1)
    friends.forEach(friend => { if (friend.isDeleted) { console.warn(friend.name, 'is deleted;'); deleted.push(friend); return false } if (friend.isOnline) { console.warn(friend.name, 'is online;'); online.push(friend); return false } else { offline.push(friend) } })
    newLine(1)
    var r = (await noblox.getFriendRequests()).data;
    console.log('Online:', online.length, '; Offline:', offline.length, '; Deleted:', deleted.length, 'Pending:', r.length)
    newLine(1)
    if(r.length){console.log('Accpeting all pending...');await r.forEachAsync(async request => { try { await noblox.acceptFriendRequest(request.id); console.log('Accepted request from:', request.name, request.id); return request } catch (err) { await noblox.declineFriendRequest(request.id); console.log('Declined request from:', request.name, request.id) } })}
    else{console.log('No pending...')}
    newLine(1)
    if (deleted.length) { console.log('Removing deleted friends...'); deleted.forEachAsync(async function (f) { return (await noblox.removeFriend(f.id), console.log('Unfriended:', f.name), f) }) } else { console.log('No deleted friends') }
    newLine(1)
    noblox.onPartyJoinedGame = function (user) { newLine(1); console.log(user, 'Joined') };noblox.onPartyJoinedGame = function (user) { newLine(1); console.log(user, "Left") }
    //console.log('Getting free items')
    //await online.forEachAsync(async friend => {try{    var inv = await noblox.getInventoryById(friend.id, 8); console.log('Getting:', friend.name); await inv.forEachAsync(async asset => { try { var info = (await noblox.getProductInfo(asset.assetId)); if (info.PriceInRobux == 0 || info.PriceInRobux == null) { console.log("Bought:", asset.assetName); await noblox.buy(asset.assetId) } else null/*console.log('trying',asset.assetName,info.PriceInRobux)*/ } catch (err) {/*console.log('Failled',asset.assetName,asset.assetId,asset.assetType)*/ } }); return inv; }catch(err){console.log(err.message,"of",friend.name)}})
    // Do everything else, calling functions and the like.
    newLine(1)
    var info={}
    var JoinAble=(await noblox.getPresences(online.map(user=>(user.id)))).userPresences.filter(p=>!!p.gameId)
    console.log(JoinAble)
    JoinAble.forEach(game=>{
        
    })
    var perge=true,export_=true,json={},import_=false;
    if(perge){
        console.log('Perging account')
        if(export_){
            console.log('Exporting friends')
            friends = (await noblox.getFriends(currentUser.UserID)).data
            online = [], offline = [], deleted = []
            var r = (await noblox.getFriendRequests()).data;
            newLine(1)
            friends.forEach(friend => { if (friend.isDeleted) { console.warn(friend.name, 'is deleted;'); deleted.push(friend); return false } if (friend.isOnline) { console.warn(friend.name, 'is online;'); online.push(friend); return false } else { offline.push(friend) } })
            newLine(1)
            console.log('Online:', online.length, '; Offline:', offline.length, '; Deleted:', deleted.length, 'Pending:', r.length)
            json.friend={online,offline,pending:r}
            fs.writeFileSync(`${path}/export.json`, JSON.stringify(json))
            console.log("Finish")
        }
    }
}()