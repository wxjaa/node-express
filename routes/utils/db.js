/*//同步模型
 var SequelizeAuto = require('sequelize-auto');
 var auto = new SequelizeAuto("premissionManagement", // 数据库名
 "yunfei",   // 用户名
 "123456",   // 用户密码
 {
 "dialect": "mysql",// 数据库使用mysql
 "host": "84mall.cn", // 数据库服务器ip
 "port": 3306        // 数据库服务器端口
 });
 auto.run(function (err) {
 if (err) {
 throw err;
 } else {
 console.log("成功下载模型");
 }
 });
 return;*/
var Sequelize = require("sequelize");
var path = require('path');
var fs = require('fs');
//var uuid = require("node-uuid");
var sequelize = new Sequelize(
    "premissionManagement", // 数据库名
   "",  // 用户名
  "", // 用户密码
    {
        "dialect": "mysql",  // 数据库使用mysql
        "host": "", // 数据库服务器ip
        "port": 3306,        // 数据库服务器端口
        "define": {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            "underscored": false,
            //设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
            "freezeTableName": true,
            //使用逻辑删除。设置为true后，调用 destroy 方法时将不会删队模型，而是设置一个 deletedAt 列。此设置需要 timestamps=true
            paranoid: true
        }
    }
);

var modes = {};
function loadModels(ff) {
    var files = fs.readdirSync(ff);
    for (var fn in files) {
        var fname = path.sep + files[fn];
        var stat = fs.lstatSync(ff + fname);
        if (stat.isDirectory() == true) {
            ls(fname);
        } else {
            //console.log("开始加载模型[" + fname + "]...");
            fname = fname.replace("\\", '').replace(".js", '');
            modes[fname] = sequelize.import("../../models/" + fname + ".js");
            module.exports[fname] = modes[fname];
            console.log("模型[" + fname + "]已经成功加载!");
        }
    }
    console.log("模型已经全部成功加载!");
    //开始设置表之间的关系

    //hasOne 包含一个
    //belongsTo 被一个包含

    //hasMany:包含多个
    //belongsToMany 多对多关系

    /*modes.countryareaclassification.hasMany(modes.areainfo, {
     targetKey: 'CACD',
     foreignKey: 'CACD'
     })*/
    modes.menu.hasMany(modes.menu, {
        targetKey: 'menuId',
        foreignKey: 'parentId'
    })
    modes.department.hasMany(modes.department, {
        targetKey: 'departmentId',
        foreignKey: 'parentDepartmentId'
    })
}

loadModels('./models');

module.exports.sequelize = sequelize;

/*
 操作符
 $and: {a: 5}           // AND (a = 5)
 $or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
 $gt: 6,                // > 6
 $gte: 6,               // >= 6
 $lt: 10,               // < 10
 $lte: 10,              // <= 10
 $ne: 20,               // != 20
 $not: true,            // IS NOT TRUE
 $between: [6, 10],     // BETWEEN 6 AND 10
 $notBetween: [11, 15], // NOT BETWEEN 11 AND 15
 $in: [1, 2],           // IN [1, 2]
 $notIn: [1, 2],        // NOT IN [1, 2]
 $like: '%hat',         // LIKE '%hat'
 $notLike: '%hat'       // NOT LIKE '%hat'
 $iLike: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
 $notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
 $like: { $any: ['cat', 'hat']}
 // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
 $overlap: [1, 2]       // && [1, 2] (PG array overlap operator)
 $contains: [1, 2]      // @> [1, 2] (PG array contains operator)
 $contained: [1, 2]     // <@ [1, 2] (PG array contained by operator)
 $any: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

 $col: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example*/
/*UUID :类型 char     长度 36
 STRING : 类型 varchar     长度 255
 INT: 类型 int
 FLOAT(11, 2): 类型 float 长度 11    小数点 2
 BOOLEAN: 类型 tinyint 长度 1
 DATE:类型 datetime 长度 0*/
