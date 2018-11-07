var btn = document.querySelector("#btn")
var content2 = document.getElementById("#content2")
btn.onclick = function(){
var crew = document.querySelector("#crew").value 
var truckId = document.querySelector("#truckId").value
var pickupLocation = document.querySelector("#pickupLocation").value
var dropOffLocation = document.querySelector("#dropOffLocation").value
var alternateSideParking = document.querySelector("#alterniteSideParking").value
var gas = document.querySelector("#gasQty").value
var shrinkQty =document.querySelector("#shrinkQty").value
var blanketsQty =document.querySelector("#blanketsQty").value
var tapeQty =document.querySelector("#tapeQty").value
var dollyQty =document.querySelector("#dollyQty").value
var right =document.querySelector("#rightMirror").value
var left =document.querySelector("#leftMirror").value
var right =document.querySelector("#rightLights").value
var left =document.querySelector("#leftLights").value
var cabCondition =document.querySelector("#cabCondition").value
var backCondition =document.querySelector("#backCondition").value
var exteriorTruckCondition =document.querySelector("#exteriorTruckCondition").value
var comments =document.querySelector("#comments").value

console.log(comments)

content3.innerHTML = "Current truck status: " + crew + "<br>" +
"Crew: " + crew + "<br>" +
"TruckId: " +  truckId + "<br>" +
"PickupLocation: " + pickupLocation + "<br>" + 
"DropOffLocatiion: " + dropOffLocation + "<br>" +
"AlternateSideParking: " + alternateSideParking + "<br>" +
"Gas:" + gas + "<br>" +
"Shrink Qty: " + shrinkQty + "<br>" +
"Blanket Qty: " + blanketsQty + "<br>" +
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
var video = document.getElementById("myVideo2");
	if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}