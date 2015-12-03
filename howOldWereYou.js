
var elFirstName = document.getElementById("firstName")
var elBirthday = document.getElementById("bday");
var elWriteHere = document.getElementById("writehere");
var elSubmitButton = document.getElementById("subbtn");

function yearDiff(bday, hdate) {
	var yDiff = hdate.getFullYear() - bday.getFullYear();
	var mDiff = hdate.getMonth() - bday.getMonth();
	var dDiff = hdate.getDate() - bday.getDate();
	var age = 0;
	if (bday > hdate) {
		age = -1;
	} else if (mDiff > 0 || ((mDiff == 0) && (dDiff > 0))) {
		age = yDiff;
	} else {
		age = yDiff - 1;
	}
	return ageString(age);
}

function ageString(age) {
	if (age === -1) {
		return "not yet born";
	} else {
		return age + " years old";
	}
}

function HistoricalDate(eventName, eventDate) {
	this.eventName = eventName;
	this.eventDate = new Date(eventDate);
}

var superBowl48 = new HistoricalDate("the Seahawks won Super Bowl XLVIII", "02/02/2014");
var fallBerlin = new HistoricalDate("the fall of the Berlin Wall", "11/09/1989");


function writeBirthday(e) {
	e.preventDefault();
	var firstName = elFirstName.value;
	var birthday = new Date(elBirthday.value);
	elWriteHere.textContent = firstName + " - " + birthday;
}

function writeAgeAtDate(dayOne, hDate) {
//	e.preventDefault();
//	var firstName = elFirstName.value;
//	var birthday = new Date(elBirthday.value);
	var diff = dayOne.eventDate - hDate.eventDate;
	var msg = dayOne.firstName + " was " + yearDiff(dayOne.eventDate, hDate.eventDate) + " when " 
	+ hDate.eventName;
	elWriteHere.textContent += msg;
//    elWriteHere.textContent = hDate.eventDate;

}

function writeAgeText(e) {
	e.preventDefault();
	var dayOne = new HistoricalDate();
	dayOne.firstName = elFirstName.value;
	dayOne.eventName = dayOne.firstName + "'s birthday";
	dayOne.eventDate = new Date(elBirthday.value);
	elWriteHere.textContent = '';
	writeAgeAtDate(dayOne, superBowl48);
	writeAgeAtDate(dayOne, fallBerlin);
}

elSubmitButton.addEventListener("click", writeAgeText, 'false');
//elSubmitButton.addEventListener('click', function(e) {
//	writeAgeAtDate(e, SuperBowl48);
//}, 'false');

//elSubmitButton.addEventListener('click', function(e) {
//	writeBirthday(e);
//}, 'false');
//elSubmitButton.addEventListener('click', writeBirthday, 'false');



