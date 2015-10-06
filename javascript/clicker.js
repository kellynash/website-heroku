

var clickMake  = function(counterstart){
	this.counterstart = counterstart;

	this.clickPlus = function(){
		counterstart++;
		console.log(counterstart);
		document.getElementById("display-counter").innerHTML=counterstart;
	}
}

clickMake.prototype.reset = function(){
	if(this.counterstart != 0){
		console.log("hi");
		this.counterstart = 0;
	} else{

	};
}








// var clicks = 0; 
//     function clickPlus() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;

// }