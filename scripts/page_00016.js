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

    var listLeft15;
    var listLeftHtml15;
    var listRight15;
    var orderLeft15;
    var orderRight15;



$(document).ready(function ()
{
	const questionIndex = 15;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft15 = new CreateListLeft15();
    listLeftHtml15 = new CreateListLeftHtml15();
    listRight15 = new CreateListRight15();
    orderLeft15 = new ShuffleMatchingOrder(listLeft15.length);
    orderRight15 = new ShuffleMatchingOrder(listRight15.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft15, listLeftHtml15, listRight15, orderLeft15, orderRight15, "idDD15", textSelect, hideLeftDropdown);
    $('#matching15').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft15);
    var maxRightSize = GetMaxSizeRightColumn(listRight15);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft15, "idDD15", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft15, "idDD15", hideLeftDropdown);


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
function InitQuestion16()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 15;
    var weight = DecodeNumber('Ro/leACf8Wg=', 379, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Match the following examination terms with their respective explanation.";
    question.noChoice = false;
    for (i = 0; i < orderLeft15.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD15", i);
        choice[1] = GetSelextedItemRight("idDD15", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft15.length; j++)
        {
            if (listLeft15[j] === choice[0])
            {
                valuation.push(listRight15[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function CreateListLeft15()
{
    this.length = 5;
    this[0] = unescape(DecodeString("8QFBt/L+xz0wQLzD"));
    this[1] = unescape(DecodeString("8cs21moPcPw="));
    this[2] = unescape(DecodeString("6uQLS0deXFo5H6SZcXW3X+dujUM="));
    this[3] = unescape(DecodeString("OvLZQDjhiDSbeUY8"));
    this[4] = unescape(DecodeString("C1dY1NZipuE="));

}

/* Code generated function */
function CreateListRight15()
{
    this.length = 5;
    this[0] = unescape(DecodeString("Om77QAMz4i2LDf/B/w9dmoy09g5hUoe27bxbZ1ruvUaXoYy9yA0TBg=="));
    this[1] = unescape(DecodeString("d1ygN02a25ZPI5PvSnadke259KUZruZlXxDSCZtiGnLwFsuyMGO/8jWsE0awhXAy"));
    this[2] = unescape(DecodeString("ni82J+tvsJMhmKtDSp54lTZHpiUVxS2iY1lAh+Mi1r+9y3kEbqCYG4vQgZg="));
    this[3] = unescape(DecodeString("ekTn9lRqcuvXFwFtL1MkvfYeD5x2nWPGzSjJ57EXcqipioH/YtDIJi8SamdUnB+gfXZftqvI6Op5qfjOXrP0wSJ4GJEuZnPm"));
    this[4] = unescape(DecodeString("INcffOUfEt6/o9XOMqJSvQysM6E79R8WWA/VlI52UwNquA0W8O64biCj021I5gl7/c2MYj7sw5u55Rdr+Gvdiw=="));

}

/* Code generated function */
function CreateListLeftHtml15()
{
    this.length = 5;

}





