
<?php
header("content-type:text/html;charset=utf-8");
//接受前端数据
$phoneNum=$_POST["phoneNum"];
$password=$_POST["password"];
// 连接数据库
$conn=mysql_connect("localhost","root","root");
mysql_select_db("peak");
$res_phoneNum=mysql_query("select * from user where phoneNum='$phoneNum'",$conn);
$res_password=mysql_query("select * from user where password=$password",$conn);
if(mysql_num_rows($res_phoneNum)==1){
    if(mysql_num_rows($res_password)==1){
echo "1";
    }else{
echo "2";
    }
}else{
echo "0";
    }
mysql_close($conn);
?>