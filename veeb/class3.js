const firstName = "Eerik";
const lastName = "Poopuu";
const dateInfo = require("./date_Time_et");
const fs = require("fs");
//let folkWisdom = "";

fs.readFile("txtfiles/vanasõnad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		//folkWisdom =data;
		onScreen(data);
	}
});

const onScreen = function(folkWisdom){
	console.log(firstName + " " + lastName);
	console.log(dateInfo.dateNowET());
	console.log("Kell on: " + dateInfo.timeNowET());
	//console.log(folkWisdom);
	let folkWisdoms = folkWisdom.split(";");
	//tavaline loop
	for (let i= 0;i<= folkWisdoms.length; i ++){
		console.log("vanasõna nr" +(i +1) +  ':"' + folkWisdoms[i]+'"');
	}
	//console.log("Tänane tarkus:" + folkWisdoms[Math.floor(Math.random()* folkWisdoms.length)]);
	//console.log(folkWisdoms);
	//console.log(folkWisdoms.length);
	}



