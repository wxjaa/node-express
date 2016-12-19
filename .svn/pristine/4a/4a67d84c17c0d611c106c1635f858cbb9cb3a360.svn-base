var express = require('express');
const co = require("co");
const uuid = require("uuid");
var router = express.Router();
var db = require('../utils/db.js');
const utils = require("../utils/utils.js");
const cache = require("../utils/cache.js");

//删除菜单
router.get("/remove", function (req, res, next) {
    var id = req.query.id;
    var result = {
        status: -1,
        data: null
    };
    if (id) {
        db.menu.destroy({
            where: {
                menuId: id
            }
        }).then(function (data) {
            if (data >= 1) {
                cache.delCache("menu")
                result.status = 1;
                result.data = data;
            } else {
                result.status = 0;
            }
            res.end(JSON.stringify(result))
        }, function (err) {
            result.data = err;
            result.state = 10;
            res.end(JSON.stringify(result));
            throw new Error(err.message);
        })
    } else {
        result.state = 10;
        res.end(JSON.stringify(result));
    }
});
//添加菜单
router.all("/addMenu", function (req, res, next) {
    var name = utils.getParamVal(req, "name");
    var result = {
        status: 0,
        msg: ""
    };
    if (!name) {
        result.msg = "请输入菜单名称";
        res.end(JSON.stringify(result));
        return;
    }
    var parentId = utils.getParamVal(req, "parentId") || null;
    var sort = utils.getParamVal(req, "sort") || 0;
    var isDisplay = !!utils.getParamVal(req, "isDisplay") || true;
    var describe = utils.getParamVal(req, "describe");
    var icon = utils.getParamVal(req, "icon");
    var url = utils.getParamVal(req, "url");
    db.menu.bulkCreate([{
        menuId: uuid.v4(),
        name: name,
        parentId: parentId,
        isDisplay: isDisplay,
        describe: describe,
        icon: icon,
        sort: sort,
        url: url

    }]).then(function (data) { // Notice: There are no arguments here, as of right now you'll have to...
        cache.delCache("menu")
        result.state = 1;
        result.data = data;
        res.end(JSON.stringify(result))
    }, function (err) {
        result.state = -1;
        result.msg = err;
        res.end(JSON.stringify(result))
    });
});

//根据id获取一个菜单信息
router.get("/getMenuInfo", function (req, res, next) {
    var menuId = req.query.id;
    var result = {
        state: -1,
        data: null,
        msg: ""
    };
    if (menuId) {
        db.menu.findOne({
            where: {
                menuId: menuId
            }, exclude: [
                "createdAt", "updatedAt", "deletedAt"
            ]
        }).then(function (data) {
            result.state = 1;
            result.data = data;
            res.end(JSON.stringify(result));
        }, function (err) {
            result.state = 10;
            result.data = err;
            result.msg = err;
            res.end(JSON.stringify(result));
        })
    } else {
        result.state = 10;
        result.msg = "菜单id不正确";
        res.end(JSON.stringify(result));
    }
});


//修改菜单信息
router.all("/changeMenu", function (req, res, next) {
    var menuId = utils.getParamVal(req, "menuId");
    var name = utils.getParamVal(req, "name");
    var isDisplay = utils.getParamVal(req, "isDisplay");
    var describe = utils.getParamVal(req, "describe");
    var icon = utils.getParamVal(req, "icon");
    var url = utils.getParamVal(req, "url");
    var result = {
        status: 0,
        data: null,
        msg: ""
    };
    if (!name) {
        result.state = -1;
        result.msg = "请输入菜单名称";
        res.end(JSON.stringify(result));
        return;
    }
    var parentId = utils.getParamVal(req, "parentId") || null;
    var sort = utils.getParamVal(req, "sort");
    isDisplay.toLowerCase() == "true" ? isDisplay = 1 : isDisplay = 0;

    db.menu.update({
        name: name,
        parentId: parentId,
        sort: sort,
        isDisplay: isDisplay,
        describe: describe,
        icon: icon,
        url: url
    }, {
        where: {
            menuId: menuId
        }
    }).then(function (data) { // Notice: There are no arguments here, as of right now you'll have to...
        cache.delCache("menu")
        result.state = 1;
        result.data = data;
        res.end(JSON.stringify(result))
    }, function (err) {
        result.state = -1;
        result.msg = err;
        res.end(JSON.stringify(result))
    });
});
module.exports = router;
