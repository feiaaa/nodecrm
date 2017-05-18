/* 
 @Author: feiaaa
 * @Date:   2017-05-15 10:37:20
 * @Last Modified by:   feiaaa
 * @Last Modified time: 2015-05-15
*/
var eqipDao = require('../dao/eqipDao.js');

//查询设备
exports.query = function(data, callback){
    eqipDao.query(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

//新增设备
exports.insert = function(data, callback){
    eqipDao.insert(data, function(err){
        if(err){
            callback(true);
            return;
        }
        callback(false);
    });
};

//修改设备
exports.update = function(data, callback){
    eqipDao.update(data, function(err){
        if(err){
            callback(true);
            return;
        }
        callback(false);
    });
};

//修改设备
exports.delete = function(data, callback){
    eqipDao.delete(data, function(err){
        if(err){
            callback(true);
            return;
        }
        callback(false);
    });
};