
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
	} else if (bday === hdate) {
		age = "";
	} else if (mDiff > 0 || ((mDiff == 0) && (dDiff > 0))) {
		age = yDiff;
	} else {
		age = yDiff - 1;
	}
	return ageString(age);
}

function ageString(age) {
	if (age === -1) {
		return "Not yet born";
	} else if (age === 0) {
		return "Infant (< 1 year old)";
	} else if (!age) {
		return "Born on this day";
	} else {
		return age + " years old";
	}
}

function HistoricalDate(eventName, eventDate) {
	this.eventName = eventName;
	this.eventDate = new Date(eventDate);
}

var superBowl48 = new HistoricalDate("Seahawks win Super Bowl XLVIII", "02/02/2014");
var fallBerlin = new HistoricalDate("Fall of the Berlin Wall", "11/09/1989");


function writeBirthday(e) {
	e.preventDefault();
	var firstName = elFirstName.value;
	var birthday = new Date(elBirthday.value);
	elWriteHere.textContent = firstName + " - " + birthday;
}

/* old text version
function writeAgeAtDate(dayOne, hDate) {
	e.preventDefault();
	var firstName = elFirstName.value;
	var birthday = new Date(elBirthday.value);
	var diff = dayOne.eventDate - hDate.eventDate;
	var msg = dayOne.firstName + " was " + yearDiff(dayOne.eventDate, hDate.eventDate) + " when " 
	+ hDate.eventName;
	elWriteHere.textContent += msg;
    elWriteHere.textContent = hDate.eventDate;

}
*/

function writeAgeAtDateRow(dayOne, hDate, rowClass) {
	var newRow = document.createElement('tr');
	newRow.className = rowClass;
	var newENameNode = document.createElement('td');
	var newENameText = document.createTextNode(hDate.eventName);
	newENameNode.appendChild(newENameText);
	newRow.appendChild(newENameNode);
	var newDateNode = document.createElement('td');
	var newDateText = document.createTextNode(yearDiff(dayOne.eventDate, hDate.eventDate));
	newDateNode.appendChild(newDateText);
	newRow.appendChild(newDateNode);
	var ageTable = document.getElementById('ageTable');
	ageTable.appendChild(newRow);
}

/*
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
*/

function writeAgeTable(e) {
	e.preventDefault();
	var dayOne = new HistoricalDate();
	dayOne.eventName = elFirstName.value;          // Use eventName to store user's name
	dayOne.eventDate = new Date(elBirthday.value); 
	tblMarkup = "<table id='ageTable'><tr><th scope='col'>Event</th>" + 
				"<th scope='col' id='ageOfHdr'>Age of </th></tr></table>";
	elWriteHere.innerHTML = tblMarkup;
	var ageOfHdrNode = document.getElementById('ageOfHdr');
	ageOfHdrNode.textContent += dayOne.eventName;
	writeAgeAtDateRow(dayOne, fallBerlin, 'even');
	writeAgeAtDateRow(dayOne, superBowl48, 'odd');
}


elSubmitButton.addEventListener("click", writeAgeTable, 'false');
//elSubmitButton.addEventListener('click', function(e) {
//	writeAgeAtDate(e, SuperBowl48);
//}, 'false');

//elSubmitButton.addEventListener('click', function(e) {
//	writeBirthday(e);
//}, 'false');
//elSubmitButton.addEventListener('click', writeBirthday, 'false');



