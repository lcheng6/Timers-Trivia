'use strict'
//A list of all the levels in this game. 
var allLevels = {
	goodWill: gameLevel(
		"Robin Williams won an Academy Award for best supporting actor in which 1997 film about a South Boston janitor?",
		["Good Will Hunting", "Mrs. Doubtfire", "Dead Poets Society", "Jumanji"],
		0, 
		"assets/images/goodWill.gif"
		),
	potter: gameLevel(
		"Which is NOT one of the four houses at Hogwarts School of Witchcraft and Wizardry?",
		["Gryffindor", "Ravenholm", "Hufflepuff", "Slytherin"],
		1,
		"assets/images/potter.gif"
		),
	abu: gameLevel(
		"What was the name of kleptomaniac monkey in the Disney movie \"Aladdin\"?",
		["Abu", "Jack", "Nabu", "Jasmine"],
		0,
		"assets/images/abu.gif"
		),
	sleepingBeauty: gameLevel(
		"Which is NOT the name of the three fairies in the Disney classic \"Sleeping Beauty\"?",
		["Flora", "Fauna", "Merryweather", "Amelia"],
		3,
		"assets/images/sleepingBeauty.gif"
		),
	backToFuture: gameLevel(
		"Which movie did Michael J Fox have an adventures with Doc?",
		["Back to Future", "Teen Wolf", "The Frighteners", "The Secret of My Success"],
		0,
		"assets/images/backToFuture.gif"
		),
	aliens: gameLevel(
		"Who played the female lead role in the 1986 sci-fi movie \"Aliens\"?",
		["Sigourney Weaver", "Megan Fox", "Meryl Streep", "Charlize Theron"],
		0,
		"assets/images/aliens.gif"
		),
	topGun: gameLevel(
		"What sunglasses did Tom Cruise wear in the 1986 movie \"Top Gun\"?",
		["Ray Ban Aviator", "Oakley Night Shade", "Maui Jim Seal", "Swiss Inverter"],
		0,
		"assets/images/topGun.gif"
		)
};

var allLevelNames = ["goodWill", "potter", "abu", "sleepingBeauty", "backToFuture", "aliens", "topGun"];

var correctAnswerText = "Correct!";
var timeupText = "Time is up!";

var guessInterval;
var showAnswerInterval;
var intervalCounter;

//Game state machine:
//0: waiting for user to select a guess, with a inital counter of 30 
//   from this state, it enter state 1: user has selected a choice
//   or state 2: time has run out, and user has not selected any choice
//1: User has selected a choice. Show wehther the guess is right or wrong, show the answer gif and move back to state 0
//2: User has not selected a choice when the guess interval ran out.  Show the answer gif, and go back to state 0
var gameState = 0;

var waitForGuess = function() {

}
var startLevel = function() {
	$('#imgCard').hide();
	var gameLevelIndex = Math.floor(Math.random()*allLevelNames.length);
	var activeLevel = allLevels[allLevelNames[gameLevelIndex]];

	var triviaQuestion = activeLevel.getTriviaQuestion();
	$('#questionResult').text(triviaQuestion);

	var choices = activeLevel.getChoices();
	//this helps generate a different shuffle choices, but choices are still tied to their 
	//original index. 

	var indices = [];
	for (var i=0; i<choices.length; i++) {
		indices.push(i);
	}

	indices = _.shuffle(indices);

	for (var i =0; i<indices.length;i++) {
		var index = indices[i];
		$('#choices').append(
			$('<div>')
				.addClass('choice')
				.attr('data-index', index)
				.text(choices[index])
				);
	}


	$('#questionResult').show();
	$('#choices').show();
	gameState = 0;

	setInterval(waitForGuess, 1000);
};

$(document).ready(function() {
	//initially just hide all relevant game interaction elements

	$('#choices').hide();
	$('#imgCard').hide();
	$('#questionResult').hide();

	startLevel();
});
