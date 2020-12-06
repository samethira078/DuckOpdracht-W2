var eend = document.getElementById("eend");
var raken = document.getElementById("p1");
var missen = document.getElementById("p2");
var veld = document.getElementById("achtergrond");
var eind = document.getElementById("reset");

eind.style.display = "none";

var topS = 200;
var left = 530;


function reset(){
	eend.style.top= "200px";
	eend.style.left = "530px";
	topS = 200;
	left = 530;
}
function fly(){
	var richtingen = ["top", "bottom", "right", "left"];

	 var randoms = Math.floor(Math.random() * richtingen.length);
	 var kiezen = richtingen[randoms];
	 	switch(richtingen[randoms]){
	 		case "top":
	 			topS -= 75;
	 			if(topS > -75){
	 				eend.style.top = topS + "px";
	 			} else {
	 				topS += 150;
	 				eend.style.top = topS + "px";
	 			}
	 		break;
	 		case "bottom":
	 			topS += 75;
	 			if(topS < 550){
	 				eend.style.top = topS + "px";
	 			} else {
	 				topS -= 150;
	 				eend.style.top = topS + "px";
	 			}
	 		break;
	 		case "right":
	 			left += 75;
	 			if(left < 1200){
	 				eend.style.left = left + "px";
	 			} else {
	 				left -= 150;
	 				eend.style.left = left + "px";
	 			}
	 		break;
	 		case "left":
	 			left -= 75;
	 			if(left > -0){
	 				eend.style.left = left + "px";
	 			} else {
	 				left += 150;
	 				eend.style.left = left + "px";
	 			}
	 		break;
	 		default:
	 }
}

var intervals = setInterval(function() {
	fly()},100);

function klik(){
	if(true){
		if(raken.innerHTML < 19){
			raken.innerHTML++;
			reset()
		} else {
			raken.innerHTML++;
			eend.style.display = "none";
			veld.style.display = "none";
			setTimeout(function(){
				alert("Gewonnen!");
				eind.style.display = "block"}, 1000);
		}
	}
}
function miss(){
	if(true){
		if(missen.innerHTML < 19){
			missen.innerHTML++;
			reset()
		} else {
			missen.innerHTML++;
			eend.style.display = "none";
			veld.style.display = "none";
			setTimeout(function(){
				alert("Verloren!");
				eind.style.display = "block"}, 1000);
		}
	}
}

function resetG(){
	eend.style.top= "200px";
	eend.style.left = "530px";
	eend.style.display = "block";
	veld.style.display = "block";
	missen.innerHTML = "0";
	raken.innerHTML = "0";
	eind.style.display = "none";
}