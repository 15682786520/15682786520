<<<<<<< HEAD
﻿# Host: localhost  (Version: 5.5.53)
# Date: 2021-03-05 20:48:57
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */

#
# Structure for table "goods_info"
#

=======
﻿# Host: localhost  (Version: 5.5.53)
# Date: 2021-03-05 20:48:57
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goods_info"
#

>>>>>>> 42fa9b93191365b7f9a1713e93547b3869ddfc00
CREATE TABLE `goods_info` (
  `Id` varchar(11) NOT NULL DEFAULT '0',
  `goods_name` varchar(255) DEFAULT NULL,
  `goods_price` varchar(255) DEFAULT NULL,
  `goods_url` varchar(255) DEFAULT NULL,
  `url_1` varchar(255) DEFAULT NULL,
  `url_2` varchar(255) DEFAULT NULL,
  `url_4` varchar(255) DEFAULT NULL,
  `url_3` varchar(255) DEFAULT NULL,
  `url_5` varchar(255) DEFAULT NULL
<<<<<<< HEAD
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "goods_info"
#

INSERT INTO `goods_info` VALUES ('1','男子薄羽绒服 F504701','￥699',' url(/peak/img/detailPage/1.jpg)',' url(/peak/img/detailPage/1.jpg)',' url(/peak/img/detailPage/2.jpg)',' url(/peak/img/detailPage/4.jpg)',' url(/peak/img/detailPage/3.jpg)',' url(/peak/img/detailPage/5.jpg)'),('2','【态极3.0】男子缓震跑鞋E11617H 【付款后15天发货】','￥499.00',' url(/peak/img/detailPage/x1608703326981_2785_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608703326981_2785_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608778800652_6840_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608778860698_1740_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608778800650_4786_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608703326981_8357_x_800_x_800.jpg)'),('3','男子圆领卫衣 DF604311','¥199.00',' url(/peak/img/detailPage/6.jpg)',' url(/peak/img/detailPage/6.jpg)',' url(/peak/img/detailPage/7.jpg)',' url(/peak/img/detailPage/9.jpg)',' url(/peak/img/detailPage/8.jpg)',' url(/peak/img/detailPage/10.jpg)');

#
# Structure for table "user"
#

CREATE TABLE `user` (
  `phoneNum` varchar(11) NOT NULL DEFAULT '0',
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES ('123','456'),('12345','12345'),('155','155'),('123456','123456');
=======
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "goods_info"
#

INSERT INTO `goods_info` VALUES ('1','男子薄羽绒服 F504701','￥699',' url(/peak/img/detailPage/1.jpg)',' url(/peak/img/detailPage/1.jpg)',' url(/peak/img/detailPage/2.jpg)',' url(/peak/img/detailPage/4.jpg)',' url(/peak/img/detailPage/3.jpg)',' url(/peak/img/detailPage/5.jpg)'),('2','【态极3.0】男子缓震跑鞋E11617H 【付款后15天发货】','￥499.00',' url(/peak/img/detailPage/x1608703326981_2785_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608703326981_2785_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608778800652_6840_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608778860698_1740_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608778800650_4786_x_800_x_800.jpg)','url(/peak/img/detailPage/x1608703326981_8357_x_800_x_800.jpg)'),('3','男子圆领卫衣 DF604311','¥199.00',' url(/peak/img/detailPage/6.jpg)',' url(/peak/img/detailPage/6.jpg)',' url(/peak/img/detailPage/7.jpg)',' url(/peak/img/detailPage/9.jpg)',' url(/peak/img/detailPage/8.jpg)',' url(/peak/img/detailPage/10.jpg)');

#
# Structure for table "user"
#

CREATE TABLE `user` (
  `phoneNum` varchar(11) NOT NULL DEFAULT '0',
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES ('123','456'),('12345','12345'),('155','155'),('123456','123456');
>>>>>>> 42fa9b93191365b7f9a1713e93547b3869ddfc00
