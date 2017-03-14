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
		"Which is NOT one of the four houses at Hogwarts School of Witchcraft and Wizardry",
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
		"Which is NOT the name of the three fairies in the Disney classic \"Sleeping Beauty\"",
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
var timeupText = "Time is up!"

