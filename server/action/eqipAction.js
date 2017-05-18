/* 
* @Author: chenhao
* @Date:   2015-06-09 12:51:03
* @Last Modified by:   chenhao
* @Last Modified time: 2015-07-05 18:41:04
*/

var express = require('express');
var eqipService = require('../service/eqipService.js');
var router = express.Router();

//查询设备
router.post("/eqip/query", function(req, res){
    var data = req.body;
    eqipService.query(data, function(err, results){
        if(err){
            res.json({msg: '查询失败'});
            return;
        }
        res.json(results);
    });
});

//新增设备
router.post("/eqip/insert", function(req, res){
    var data = req.body;
    eqipService.insert(data, function(err){
        if(err){
            res.json({msg: '新增失败'});
            return;
        }
        res.json({msg: '新增成功'});
    });
});

//更新设备
router.post("/eqip/update", function(req, res){
    var data = req.body;
    eqipService.update(data, function(err){
        if(err){
            res.json({msg: '修改失败'});
            return;
        }
        res.json({msg: '修改成功'});
    });
});

//删除设备
router.post("/eqip/delete", function(req, res){
    var data = req.body;
    eqipService.delete(data, function(err){
        if(err){
            res.json({msg: '删除失败'});
            return;
        }
        res.json({msg: '删除成功'});
    });
});

module.exports = router;