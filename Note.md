#h5 笔记

##地理定位API

###纬度/经度转换

地理定位API坐标使用小数，使用以下代码进行转换

度分秒转换为小数

​    	function degreesToDecimal(degrees,minutes,seconds){

return degrees + (minutes / 60.0)+ (seconds/3600.0);

}

###如何确定位置

GPS

IP地址

蜂窝电话（根据与基站的距离）

Wi-Fi（一个或多个Wi-Fi接入点完成三角定位）
