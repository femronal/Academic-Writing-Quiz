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

    var listLeft14;
    var listLeftHtml14;
    var listRight14;
    var orderLeft14;
    var orderRight14;



$(document).ready(function ()
{
	const questionIndex = 14;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft14 = new CreateListLeft14();
    listLeftHtml14 = new CreateListLeftHtml14();
    listRight14 = new CreateListRight14();
    orderLeft14 = new ShuffleMatchingOrder(listLeft14.length);
    orderRight14 = new ShuffleMatchingOrder(listRight14.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft14, listLeftHtml14, listRight14, orderLeft14, orderRight14, "idDD14", textSelect, hideLeftDropdown);
    $('#matching14').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft14);
    var maxRightSize = GetMaxSizeRightColumn(listRight14);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft14, "idDD14", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft14, "idDD14", hideLeftDropdown);


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
function InitQuestion15()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 14;
    var weight = DecodeNumber('qBewjDImjnE=', 153, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Match the following examination terms with their respective explanation.";
    question.noChoice = false;
    for (i = 0; i < orderLeft14.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD14", i);
        choice[1] = GetSelextedItemRight("idDD14", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft14.length; j++)
        {
            if (listLeft14[j] === choice[0])
            {
                valuation.push(listRight14[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function CreateListLeft14()
{
    this.length = 5;
    this[0] = unescape(DecodeString("WIB7LCG+3/M="));
    this[1] = unescape(DecodeString("aScPmz34r6k="));
    this[2] = unescape(DecodeString("7A7kFzgBZIc="));
    this[3] = unescape(DecodeString("7lR5kHzac82UyTl1"));
    this[4] = unescape(DecodeString("rhgJwdC4aEk="));

}

/* Code generated function */
function CreateListRight14()
{
    this.length = 5;
    this[0] = unescape(DecodeString("tpXHeQdvcA/G90wWCGJUT4903Pe3U0eBkUkXTI0RZZsZ+G4JX7rmc/oUYzMvmTFCJSUcaCvhxpBkjP/0eR8ChA=="));
    this[1] = unescape(DecodeString("hjbW83B+C3ABiGw0WzJJb7vBgliJtGql9MMpJKJCgS5s65sI+sK08jHMq6FtEZWygnps9WI18IX3O5R19ABg/0EhW7dyrA1ugB7c/eDRy8g="));
    this[2] = unescape(DecodeString("nFsn1je1ITufyuxkDgWg74fch8V5G01adCwMNUNOQ275T/qwMvF41wlRp4DJTMSVUPVFjYMtsG9MXwBKUMDZQRMrW58IKI+P67F3WiwZ8c8="));
    this[3] = unescape(DecodeString("Dy9HsjFPn/BxNhyIMhh73yYivnIiqeS2hMl0D0HzLcoXxY+P"));
    this[4] = unescape(DecodeString("RJDmnPscUOuLJ80hwxxAq4kPLGHobOssansqGGiI2d1ciemGZFWqrqwmUMU="));

}

/* Code generated function */
function CreateListLeftHtml14()
{
    this.length = 5;

}





