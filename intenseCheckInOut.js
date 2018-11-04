var btn = document.querySelector("#btn")

btn.onclick = function(){
var username = document.querySelector("#username")
var password = document.querySelector("#pass").value  
var result = document.querySelector("#result")
var container = document.querySelector("#container")
var heading = document.querySelector("#heading")
var video = document.getElementById("myVideo1")

console.log(password)
if(password == "trucks"){
    
    if (video.paused) {
        video.play();
        } else {
        video.pause();
      }
	setTimeout(function(){
		window.location.href = "file:///Users/kwadwot.nyamekye/Desktop/Intense%20Check%20In:Out/intenseCheckInOutP3.html" 
		container.style.display = "trucks"
		heading.innerHTML = "welcome to the home page"
}, 6000);
}
 else{
	result.innerHTML = "Password is incorrect."
result.style.color = "red"
}
}
