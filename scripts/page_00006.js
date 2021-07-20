//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 5;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('KUdd2lMlQU0=', 136, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "A good academic writing must _________________________. ";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XmGlHqeL6V4q0xWuacfMvM7dyXLixitJw5ocMsI77GesGSqQq5kFrFKtFeyyYdMLnoR10A=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}






