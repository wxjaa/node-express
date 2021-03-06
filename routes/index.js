var express = require('express');
const co = require("co");
const uuid = require("uuid");
var router = express.Router();
var db = require('./utils/db.js');
var utils = require('./utils/utils.js');
/* GET home page. */
router.get('/systemSetting/menu', function (req, res, next) {

    db.menu.all({
        where: {
            parentId: null
        },
        include: [
            {
                model: db.menu,
                required: false,
                order: [['sort', 'ASC']],
                include: [
                    {
                        model: db.menu,
                        required: false,
                        order: [['sort', 'ASC']],
                        include: [
                            {
                                model: db.menu,
                                required: false,
                                order: [['sort', 'ASC']],
                                include: [
                                    {
                                        model: db.menu,
                                        required: false,
                                        order: [['sort', 'ASC']]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        order: [['sort', 'ASC']]
    }).then(function (data) {
        utils.render({data: data}).then(function (row) {
            res.render('systemSetting/menu', row);
        });
    })
});
router.get('/department', function (req, res, next) {
    db.department.all({
        where: {
            parentDepartmentId: null
        },
        include: [
            {
                model: db.department,
                required: false,
                order: [['sort', 'ASC']],
                include: [
                    {
                        model: db.department,
                        required: false,
                        order: [['sort', 'ASC']],
                        include: [
                            {
                                model: db.department,
                                required: false,
                                order: [['sort', 'ASC']],
                                include: [
                                    {
                                        model: db.department,
                                        required: false,
                                        order: [['sort', 'ASC']]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        order: [['sort', 'ASC']]
    }).then(function (data) {
        utils.render({data: data}).then(function (row) {
            res.render('systemSetting/department', row);
        });
    });
});
router.get('/', function (req, res, next) {
    utils.render({data:""}).then(function (row) {
        res.render('index', row);
    });
});
module.exports = router;