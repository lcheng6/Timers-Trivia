'use strict'
//the constructor for gameLevel object, 
//triviaQuestion: the text of the trivia question
//triviaChoices: an array of guesses, a plain array with 4 strings. 
//correctAnswerIndex: is the index of the correct answer within triviaChoices
var gameLevel = function(triviaQuestion, triviaChoices, correctAnswerIndex, imgCard) {
	var priv = {
		question: triviaQuestion,
		choices: triviaChoices,
		correctAnswerIndex: correctAnswerIndex, 
		imgCard: imgCard
	};

	return {
		//return the Trivia's question
		getTriviaQuestion: function() {
			return priv.question;
		},

		//return true is guessed correct, otherwise not
		isAnswerCorrect: function(index) {
			if(priv.correct === index) {
				return true;
			}else {
				return false
			}
		},
		//return the list of choices for this trivia
		getChoices: function() {
			return priv.choices;
		},
		//return the image associated with correct answer of this trivia
		getImgCard: function() {
			return priv.imgCard;
		},
		getCorrectAnswer:function() {
			return priv.choices[priv.correctAnswerIndex];
		}
	}
}