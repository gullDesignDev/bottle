// Example for Multivalue
// var textDraft = [
// 	"Bitte auswählen",
// 	"Das ist Text 1 | Herzlichen Glückwunsch"
// ];

var textDraft = [
	'Bitte auswählen',
	'Herzlichen Glückwunsch',
	'Happy Birthday',
	'Frohe Weihnachten',
	'Happy New Year',
	'Zum Jubiläum',
	'Zum Neuen Job',
	'Zum Hochzeitstag',
	'Ich liebe Dich',
	'Frohe Festtage',
	'Gute Besserung',
	'Viel Glück!',
	'Zum Umzug',
	'Ich han di gern',
	'Auf das neue Daheim'
];


function generateSelect() {
	var parent = document.getElementById("textDraft");

	//Create and append select list with attributes
	var selectList = document.createElement("select");
	selectList.setAttribute("id", "texte");
	selectList.setAttribute("name", "texte");
	selectList.setAttribute("class", "form-select");
	selectList.setAttribute("onChange", "prefillWithDraft()");
	parent.appendChild(selectList);
	
	//Create and append the options
	for (var i = 0; i < textDraft.length; i++) {
		var option = document.createElement("option");
		option.value = textDraft[i];
		option.text = textDraft[i];
		selectList.appendChild(option);
	}
}

generateSelect();

function selectBottle(myBottle) {
	switch (myBottle.value) {
		case 'smallBottle':
			// document.getElementById('previewChampagner').src='pic_bulboff.gif';
			document.getElementById("previewChampagner").setAttribute('src', 'https://www.angela-bruderer.ch/media/wysiwyg/personalisierbarerChampagner/8409901-01_vorschau.jpg');
			break;
			
			case 'largeBottle':
			document.getElementById("previewChampagner").setAttribute('src', 'https://www.angela-bruderer.ch/media/wysiwyg/personalisierbarerChampagner/8410001-01_vorschau.jpg');
			// document.getElementById("previewChampagner").style.backgroundImage = "url('https://www.angela-bruderer.ch/media/wysiwyg/personalisierbarerChampagner/8410001-01_vorschau.jpg')";
			break;
	}
}

function preview(el, text) {
	document.getElementById(el).innerHTML = text;
}

function prefillWithDraft(multiRow = false) {
	var select = document.getElementById('texte');
	var option = select.options[select.selectedIndex];

	let str = option.value;

	if (str != '') {
		if (multiRow) {
			const myArr = str.split("|");
			document.getElementById('previewRow1').innerHTML = myArr[0];
			document.getElementById('zeile1').value = myArr[0];
			document.getElementById('previewRow2').innerHTML = myArr[1];
			document.getElementById('zeile2').value = myArr[1];
		} else {
			const myArr = str;
			document.getElementById('previewRow1').innerHTML = str;
			document.getElementById('zeile1').value = str;
		}
	}
}

function sendOrder() {
	bottle = document.querySelector('input[name="bottle"]:checked').value;
	if (document.getElementById('previewRow1').innerHTML != '' ) {
		switch (bottle) {
			case 'smallBottle':
				link = 'https://stage.angela-bruderer.ch/de/chiancone-due-terre-cuvee-vino-rosso-rotwein';
				break;

			case 'largeBottle':
				link = 'https://stage.angela-bruderer.ch/de/chiancone-due-terre-cuvee-vino-rosso-rotwein';
				break;
		}
	} else {
		return false;
	}

	window.location.href = link + '?zeile1=' + document.getElementById('zeile1').value + '&zeile2=' + document.getElementById('zeile2').value;
}

function sendBtn() {
	if (document.getElementById('previewRow1').innerHTML != '' &&
		document.getElementById('previewRow2').innerHTML != '') {
			window.location.href = 'https://stage.angela-bruderer.ch/de/chiancone-due-terre-cuvee-vino-rosso-rotwein?zeile1=' + document.getElementById('zeile1').value + '&zeile2=' + document.getElementById('zeile2').value;
	} else {
		return false;
	}
}