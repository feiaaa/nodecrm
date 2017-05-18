/*
 @Author: feiaaa
 * @Date:   2017-05-15 10:37:20
 * @Last Modified by:   feiaaa
 * @Last Modified time: 2015-05-15
*/

var eqip = {
    eqipId : "",    //设备编号
    eqipName : "",  //设备名
    color : "",  //颜色
    size: "",      //尺寸
    query: "SELECT * FROM eqip WHERE 1=1 ",
    insert: "INSERT INTO eqip SET ",
    update: "UPDATE eqip SET ",
    delete: "DELETE FROM eqip WHERE eqipId in ",
    pk: "eqipId"
}

module.exports = eqip;  