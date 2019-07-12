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