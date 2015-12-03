
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
//	} else if (bday == hdate) {
//		age = "";
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
//	} else if (!age) {
//		return "Born on this day";
	} else {
		return age + " years old";
	}
}

function HistoricalDate(eventName, eventDate) {
	this.eventName = eventName;
	this.eventDate = new Date(eventDate);
}

var beatlesTV = new HistoricalDate("Beatles play on Ed Sullivan", "02/09/1964");
var apollo11 = new HistoricalDate("Apollo 11 lands on the moon", "07/20/1969");
var hostageCrisis = new HistoricalDate("Iranians storm US embassy", "11/4/1979");
var fallBerlin = new HistoricalDate("Fall of the Berlin Wall", "11/09/1989");
var sept11 = new HistoricalDate("World Trade Center attacks", "09/11/2001");
var superBowl48 = new HistoricalDate("Seahawks win Super Bowl XLVIII", "02/02/2014");


function writeBirthday(e) {
	e.preventDefault();
	var firstName = elFirstName.value;
	var birthday = new Date(elBirthday.value);
	elWriteHere.textContent = firstName + " - " + birthday;
}

function writeAgeAtDateRow(dayOne, hDate) {
	var newRow = document.createElement('tr');
//	newRow.className = rowClass;
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
	writeAgeAtDateRow(dayOne, beatlesTV);
	writeAgeAtDateRow(dayOne, apollo11);
	writeAgeAtDateRow(dayOne, hostageCrisis);
	writeAgeAtDateRow(dayOne, fallBerlin);
	writeAgeAtDateRow(dayOne, sept11);
	writeAgeAtDateRow(dayOne, superBowl48);
}


elSubmitButton.addEventListener("click", writeAgeTable, 'false');




