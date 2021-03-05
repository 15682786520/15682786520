<?php
header("content-type:text/html;charset=utf-8");
//接受前端数据
$phoneNum=$_POST["phoneNum"];
$password=$_POST["password"];
// 连接数据库
$conn=mysql_connect("localhost","root","root");
mysql_select_db("peak");
$res_phoneNum=mysql_query("select * from user where phoneNum='$phoneNum'",$conn);
if(mysql_num_rows($res_phoneNum)==1){
    echo "2";
}else{
    mysql_query("insert into user(phoneNum, password) values('$phoneNum','$password');",$conn) or die('添加数据出错：'.mysql_error());
    echo "1";
}
mysql_close($conn);
?>