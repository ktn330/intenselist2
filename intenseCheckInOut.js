var btn = document.querySelector("#login")

btn.onclick = function(){
var username = document.querySelector("#username")
var password = document.querySelector("#pass").value  
var result = document.querySelector("#result")
var container = document.querySelector("#container")
var heading = document.querySelector("#heading")

console.log(password)
if(password == "trucks"){
    result.innerHTML = "You have succesfully logged in."
result.style.color = "green"
window.location.href = "file:///Users/kwadwot.nyamekye/Desktop/Intense%20Check%20In:Out/intenseCheckInOutP2.html" 
container.style.display = "trucks"
heading.innerHTML = "welcome to the home page"
}
 else{
	result.innerHTML = "Password is incorrect."
result.style.color = "red"
}
}

var btn = document.querySelector("#btn")
btn.onclick = function(){
var crew = document.querySelector("#crew").value 
var truckId = document.querySelector("#truckId").value
var dropOffLocation = document.querySelector("#dropOffLocation").value
var gas = document.querySelector("#gas").value
var shrinkQty =document.querySelector("#shrink qty")
var blanketsQty =document.querySelector("#blankets")
var tapeQty =document.querySelector("#tape qty")
var dollyQty =document.querySelector("#dolly qty")
var right =document.querySelector("#right")
var left =document.querySelector("#left")
var right =document.querySelector("#right")
var left =document.querySelector("#left")
var cabCondition =document.querySelector("#cab condition")
var backCondition =document.querySelector("#back condition")

results.innerHTML = "Current truck status," + crew + "<br>" +
"Crew" + crew
"Truck ID" +  truck id  
"Drop Off Locatiion" + drop off location
"Gas" + gas
"Shrink Qty" + shrink qty
"Blanket Qty" + blanket qty
"Tape Qty"  + tape qty
"Dolly Qty" + dolly qty
"Right" + right
"Left" + left
"Right" + right
"Left" + left
"Cab Condition" + cab condition
"Back Condition" + back condition
}
   	


