const NodeCache = require("node-cache");
const myCache = new NodeCache();

function setCache(key, value) {
    return new Promise(function (resolve, reject) {
        myCache.set(key, value, function (err, success) {
            if (!err && success) {
                resolve()
            } else {
                reject();
            }
        })
    })

}
function getCache(key) {
    return new Promise(function (resolve, reject) {
        try {
            var value;
            if (Array.isArray(key)) {
                value = myCache.mget(key);
            } else {
                value = myCache.get(key);
            }
            resolve(value);
        } catch (e) {
            reject(e);
        }
    })
}

function delCache(key) {
    return new Promise(function (resolve, reject) {
        myCache.del(key, function (err, count) {
            if (!err) {
                resolve()
            } else {
                reject()
            }
        });
    })
}
module.exports = {
    setCache: setCache,
    getCache: getCache,
    delCache: delCache
};
/*
 const cache = require("./cache.js");

 cache.setCache("mykey", {"hah": "hehe", "name": 12}).then(
 function () {
 console.log(12421)
 })

 cache.getCache("mykey").then(function (value) {
 console.log(value)
 })

 * */








