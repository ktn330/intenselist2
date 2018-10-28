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


// var btn = document.querySelector("#btn")

// btn.onclick = function(){
// 	var crew = document.querySelector("#crew").value 
// 	var truck id = document.querySelector("#truckID").value
// 	var drop off location = document.querySelector("#dropOfflocation").value
// 	var gas = document.querySelector("#gas").value
// 	var shrink qty =document.querySelector("#shrink qty")
//     var blankets qty =document.querySelector("#blankets")
//     var tape qty =document.querySelector("#tape qty")
//    	var dolly qty =document.querySelector("#dolly qty")
//    	var right =document.querySelector("#right")
//    	var left =document.querySelector("#left")
//    	var right =document.querySelector("#right")
//    	var left =document.querySelector("#left")
//    	var cab condition =document.querySelector("#cab condition")
//    	var back condition =document.querySelector("#back condition")

//  results.innerHTML = "Current truck status," + crew + "<br>" +
//  "Crew" + crew
//  "Truck ID: <br>" +  truck id  
//  "Drop Off Locatiion" + drop off location
//  "Gas" + gas
//  "Shrink Qty" + shrink qty
//  "Blanket Qty" + blanket qty
//  "Tape Qty"  + tape qty
//  "Dolly Qty" + dolly qty
//  "Right" + right
//  "Left" + left
//  "Right" + right
//  "Left" + left
//  "Cab Condition" + cab condition
//  "Back Condition" + back condition

   	
//     }
//     if(female.checked){
//     	gender = "female"
//     }

// 	results.innerHTML = "Thanks for registering," + name + "<br>" +
// "Here is your information: <br>" + 
// "Address:  " + address + "<br>"
// "phone: " + phone + "<br>"
// email + "<br>" +
// "Your interest is " + interest + "<br>" + 
// "Gender is " + gender
// }



// <script>

//         $(function () {
//             $("#lineargauge").igLinearGauge({
//                 height: "100px",
//                 width: "100%",
//                 minimumValue: 0,
//                 maximumValue: 10, 
//                 value: 1,
//                 needleBrush: "white",
//                 needleOutline: "#2582a9",
//                 isNeedleDraggingEnabled: true,
//                 ranges: [
//                    {
//                        name: 'first',
//                        startValue: 0,
//                        endValue: 3, 
//                    },
//                    {
//                        name: 'second',
//                        startValue: 3,
//                        endValue: 7, 
//                    },
//                    {
//                        name: 'third',
//                        startValue: 7,
//                        endValue: 10, 
//                    }
//                 ], 
//             });
//         });

//     </script>
// </body>
// </html> Gas Gauge Script