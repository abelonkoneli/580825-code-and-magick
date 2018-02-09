'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [ ];
var firstNames = [
'Иван',
'Хуан Себастьян',
'Мария',
'Кристоф',
'Виктор',
'Юлия',
'Люпита',
'Вашингтон'
];
var lastNames = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'
];
var coatColors = [
'rgb(101, 137, 164)',
'rgb(241, 43, 107)',
'rgb(146, 100, 161)',
'rgb(56, 159, 117)',
'rgb(215, 210, 55)',
'rgb(0, 0, 0)'
];
var eyesColors = [
'black',
'red',
'blue',
'yellow',
'green'
];
var createWizardsArray = function (j) {
var sortArray = function (arr) {
var index;
for (var i = 0; i <= arr.length - 1; i++) {
	index = Math.floor(Math.random()*(arr.length - i));
	arr.push(arr[index]);
	arr.splice(index, 1);
}
return arr;
};
sortArray(firstNames);
sortArray(lastNames);
sortArray(coatColors);
sortArray(eyesColors);

for (var i=0; i<=3; i++) {
wizards[i] = {
name: (firstNames[i] + ' ' + lastNames[i]),
coatColor: coatColors[i],
eyesColor: eyesColors[i]
};
} return wizards;
};
createWizardsArray();

var renderWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
	fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
