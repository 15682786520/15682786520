<?php
header("content-type:text/html;charset=utf-8");
//接受前端数据
$goods_id=$_POST["goods_id"];
// $password=$_POST["password"];
// 连接数据库
$conn=mysql_connect("localhost","root","root");
mysql_select_db("peak");
$res_goods_id=mysql_query("select * from goods_info where id='$goods_id'",$conn);$arr=mysql_fetch_object($res_goods_id); // 将结果集中的行以对象的方式取出
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
// if(mysql_num_rows($res_goods_id)==1){
   
    
// }
// mysql_fetch_object($res_goods_id)
// else{
//     mysql_query("insert into user(phoneNum, password) values('$phoneNum','$password');",$conn) or die('添加数据出错：'.mysql_error());
//     echo "1";
// }
// 释放结果集
mysql_free_result($res_goods_id);
mysql_close($conn);
?>