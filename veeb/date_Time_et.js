
const dateNowET = function(){
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeNowET = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const timeOfDayET = function(){
	let dayPart = "suvaline aeg";
	const hourNow = new Date().getHours();
	if (hourNow > 6 && hourNow <= 11){
		dayPart = "hommik";
	}
	if(hourNow >= 12 && hourNow < 14){
		dayPart = "keskpأ¤ev";
	}
	if(hourNow >= 14 && hourNow < 18){
		dayPart = "pأ¤rastlأµuna";
	}
	if (hourNow > 18){
		dayPart = "أµhtu";
	}
	return dayPart;
}

module.exports = {dateNowET: dateNowET, timeNowET: timeNowET, timeOfDayET: timeOfDayET};