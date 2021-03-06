const cache = require('./cache.js');
const co = require("co");
const db = require('./db.js');
function render(param) {
    return new Promise(function (resolve, reject) {
        co(function *() {
            //添加菜单数据
            var menu = yield cache.getCache("menu");
            if (!menu) {
                menu = yield db.menu.all({
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
                });
                yield cache.setCache("menu", menu);
            }
            param.menu = menu;
            //添加登录用户数据
            resolve(param);
        }).catch(function (err) {
                reject(err);
            }
        );
    });
}
function getParamVal(req, varName) {
    var result;
    if (req.method == "GET") {
        result = req.query[varName];
    } else {
        result = req.body[varName];
    }
    if (result == "undefined" || result == "null" || result == undefined) {
        result = null;
    }
    return result;
}
module.exports={
    render:render,
    getParamVal:getParamVal
};