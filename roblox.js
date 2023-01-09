var noblox = require("noblox.js")
var { argv, mainModule } = require('process')
var path = mainModule.path
var fs = require("fs")
var token = ""
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
