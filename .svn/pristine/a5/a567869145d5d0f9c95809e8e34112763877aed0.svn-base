var express = require('express');
const co = require("co");
const uuid = require("uuid");
var router = express.Router();
var db = require('../utils/db.js');
const utils = require("../utils/utils.js");

//删除部门
router.get("/remove", function (req, res, next) {
    var id = req.query.id;
    var result = {
        state: -1,
        data: null
    };
    if (id) {
        db.department.destroy({
            where: {
                departmentId: id
            }
        }).then(function (data) {
            if (data >= 1) {
                result.state = 1;
                result.data = data;
            } else {
                result.state = 0;
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
})

//添加部门
router.all("/addDepartment", function (req, res, next) {
    var name = utils.getParamVal(req, "name");
    var result = {
        status: 0,
        msg: ""
    }
    if (!name) {
        result.state = -1;
        result.msg = "请输入部门名称"
        res.end(JSON.stringify(result));
        return;
    }
    var parentDepartmentId = utils.getParamVal(req, "parentDepartmentId");
    var sort = utils.getParamVal(req, "sort");

    db.department.bulkCreate([{
        departmentId: uuid.v4(),
        name: name,
        parentDepartmentId: parentDepartmentId,
        sort: sort
    }]).then(function (data) { // Notice: There are no arguments here, as of right now you'll have to...
        result.state = 1;
        res.end(JSON.stringify(result))
    }, function () {
        result.state = -1;
        res.end(JSON.stringify(result))
    });
})
//根据id获取一个菜单信息
router.get("/getDepartmentInfo", function (req, res, next) {
    var departmentId = req.query.id;
    var result = {
        state: -1,
        data: null,
        msg: ""
    };
    if (departmentId) {
        db.department.findOne({
            where: {
                departmentId: departmentId
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
        result.msg = "部门id不正确"
        res.end(JSON.stringify(result));
    }
})

//修改菜单信息
router.all("/changeDepartment", function (req, res, next) {
    var departmentId = utils.getParamVal(req, "departmentId");
    var name = utils.getParamVal(req, "name");
    var result = {
        status: 0,
        data: null,
        msg: ""
    }
    if (!name) {
        result.state = -1;
        result.msg = "请输入部门名称"
        res.end(JSON.stringify(result));
        return;
    }
    var parentDepartmentId = utils.getParamVal(req, "parentDepartmentId") || null;
    var sort = utils.getParamVal(req, "sort");

    db.department.update({
        name: name,
        parentDepartmentId: parentDepartmentId,
        sort: sort
    }, {
        where: {
            departmentId: departmentId,
        }
    }).then(function (data) { // Notice: There are no arguments here, as of right now you'll have to...
        result.state = 1;
        result.data = data;
        res.end(JSON.stringify(result))
    }, function (err) {
        result.state = -1;
        result.msg = err;
        res.end(JSON.stringify(result))
    });
})
module.exports = router;
