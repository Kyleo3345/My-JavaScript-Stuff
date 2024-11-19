var selectionButtons = document.querySelectorAll('[data-selection]');
var finalColumn = document.querySelector('[data-final-column]');
var computerScoreSpan = document.querySelector('[data-computer-score]');
var yourScoreSpan = document.querySelector('[data-your-score]');

//The code for the Selections.
var SELECTIONS = [
{
	name: 'paper',
	emoji: '📃',
	beats: 'rock'
},
{
	name: 'rock',
	emoji: '🪨',
	beats: 'scissors'
},
{
	name: 'scissors',
	emoji: '✂️',
	beats: 'paper'
}
];
selectionButtons.forEach(selectionButton => {
	selectionButton.addEventListener('click', e => {
		var selectionName = selectionButton.dataset.selection;
		var selection = SELECTIONS.find(selection => selection.name === selectionName);
		makeSelection(selection);
	});
});

//The code below is for the clicking the selection and for the computer to select.
function makeSelection(selection) {
	var computerSelection = randomSelection();
	var yourWinner = isWinner(selection, computerSelection);
	var computerWinner = isWinner(computerSelection, selection);
	console.log(computerSelection);
	
	addSelectionResult(computerSelection, computerWinner);
	addSelectionResult(selection, yourWinner);
	
	if (yourWinner)incrementScore(yourScoreSpan);
	if (computerWinner) incrementScore(computerScoreSpan);
}

//To show the score.
function incrementScore(scoreSpan) {
	scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

//To display what you and the computer previously selected.
function addSelectionResult(selection, winner) {
	var div = document.createElement('div');
	div.innerText = selection.emoji;
	div.classList.add('result-selection');
	if (winner) div.classList.add('winner');
	finalColumn.after(div);
}

//Shows results
function isWinner(selection, opponentSelection) {
	return selection.beats === opponentSelection.name;
}
//Computer makes the random selection.
function randomSelection() {
	var randomIndex = Math.floor(Math.random() * SELECTIONS.length);
	return SELECTIONS[randomIndex];
}