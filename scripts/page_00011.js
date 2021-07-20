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
	const questionIndex = 10;
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
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('inTuP2u+uIY=', 900, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "It is an academic writing which is time bound. It may be informed or impromptu. It is meant to test the understanding of students on a particular topic.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('inTuP2u+uIY=', 902, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Assignment";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J0h6jyYLR4w=', 263, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Term paper";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yUCOvCnomCI=', 265, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Test";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7UPFEaGV6Rk=', 657, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Examination";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('DCS5VRmQYfI=', 659, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Thesis writing";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}






