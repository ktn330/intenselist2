var btn = document.querySelector("#btn")

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
var pickupLocation = document.querySelector("#pickupLocation").value
var dropOffLocation = document.querySelector("#dropOffLocation").value
var alternateSideParking = document.querySelector("#alterniteSideParking").value
var gas = document.querySelector("#gasQty").value
var shrinkQty =document.querySelector("#shrinkQty")
var blanketsQty =document.querySelector("#blanketsQty")
var tapeQty =document.querySelector("#tapeQty")
var dollyQty =document.querySelector("#dollyQty")
var right =document.querySelector("#rightMirror")
var left =document.querySelector("#leftMirror")
var right =document.querySelector("#rightLights")
var left =document.querySelector("#leftLights")
var cabCondition =document.querySelector("#cabCondition")
var backCondition =document.querySelector("#backCondition")
var exteriorTruckCondition =document.querySelector("#exteriorTruckCondition")
var comments =document.querySelector("#comments")

results.innerHTML = "Current truck status: " + crew + "<br>" +
"Crew: " + crew + "<br>" +
"TruckId: " +  truckId + "<br>" +
"PickupLocation: " + pickupLocation + "<br>" + 
"DropOffLocatiion: " + dropOffLocation + "<br>" +
"AlternateSideParking: " + alternateSideParking + "<br>" +
"Gas:" + gas + "<br>" +
"Shrink Qty: " + shrinkQty + "<br>" +
"Blanket Qty: " + blanketQty + "<br>" +
"Tape Qty: "  + tapeQty + "<br>" +
"Dolly Qty: " + dollyQty + "<br>" +
"Right: " + right + "<br>" +
"Left: " + left + "<br>" +
"Right: " + right + "<br>" +
"Left: " + left + "<br>" +
"Cab Condition: " + cabCondition + "<br>" +
"Back Condition: " + backCondition + "<br>" +
"Exterior Truck Damage: " + exteriorTruckCondition + "<br>" +
"Comments: " + comments + "<br>" 
}
   	


