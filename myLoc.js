window.onload=getMyLocation;

//处理程序
function getMyLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation,displayError);
    }else{
        alert("Oops,no geolocation supported");
    }
}

//成功处理程序
function displayLocation(position){
    var latitude=position.coords.latitude;
    var longitude=position.coords.longitude;
    var div=document.getElementById("location");
    div.innerHTML= "You are at Latitude: "+ latitude +", longitude: "+ longitude;
    div.innerHTML+="(with" + position.coords.accuracy + " meters accuracy)";

   //传入坐标得到距离
   var km=computeDistance(position.coords,SHCoords);
   var distance=document.getElementById("distance");
   distance.innerHTML="You are "+ km +" km from ShangHai"; 
}

//错误处理程序
function displayError(error){
    var errorTypes={
        0:"Unknown error",
        1:"Permission denied by user",
        2:"Position is not available",
        3:"Request timed out"
    };
    var errorMessage=errorTypes[error.code];
    if(error.code==0 || error.code==2){
        errorMessage=errorMessage+ " " + error.message;
    }
    var div=document.getElementById("location");
    div.innerHTML=errorMessage;


}

//计算距离
function computeDistance(startCoords,destCoords){
    var startLatRads=degreesToRadians(startCoords.latitude);
    var startLongRads=degreesToRadians(startCoords.longitude);
    var destLatrads=degreesToRadians(destCoords.latitude);
    var destLongRads=degreesToRadians(destCoords.longitude);

    var Radius=6371; //Radius of the earth in km
    var distance=Math.acos(Math.sin(startLatRads)*Math.sin(destLatrads)+
                Math.cos(startLatRads)*Math.cos(destLatrads)*
                Math.cos(startLongRads-destLongRads))*Radius;

    return distance;
}

//角度制转弧度制
function degreesToRadians(degrees){
    var radians=(degrees*Math.PI)/180;
    return radians;
}

var SHCoords={
    latitude:121.0,
    longitude:30.0
};

