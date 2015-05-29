
//http://stackoverflow.com/questions/4371565/can-you-create-javascript-regexes-on-the-fly-using-string-variables
function findReplace(textBlock, targetWord, replacement) {
	return textBlock.replace( new RegExp(targetWord, 'gi'), replacement );
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function findReplaceMDN(fullS, oldS, newS) {
  return fullS.split(oldS).join(newS);
};

// Runs infinite loop when replacement contains targetWord
function myFindReplace(textBlock, targetWord, replacement) {
	var editBlock = textBlock;
	var indexes = [];
	while( editBlock.indexOf(targetWord) >= 0 ) {
		editBlock = editBlock.replace(targetWord, replacement);
	};
	return editBlock;
};

function replaceWholeWords(textBlock, targetWord, replacement) {
	var re = '\\b' + targetWord + '\\b';
	return textBlock.replace( new RegExp(re, 'gi'), replacement );
}

function replaceWords(textBlock, targetWord, replacement, option) {
	var re;
	var flag;
	switch( option ) {
		case "first":
			re = '\\b' + targetWord + '\\b';
			flag = 'i';
			break;
		case "words":
			re = '\\b' + targetWord + '\\b';
			flag = 'gi'
			break;
		case "substring":
			re = targetWord;
			flag = 'gi'
			break;
		default: 
			re = '\\b' + targetWord + '\\b';
			flag = 'gi';
	};

	var newBlock = textBlock.replace( new RegExp(re, flag), replacement );
		return newBlock;
};

$(function(){
	$("form#findAndReplace").submit(function(event) {
		var textBlock = $("textarea#textBlock").val();
		var targetWord = $("input#targetWord").val();
		var replacement = $("input#replacement").val();
		var option = $("select#findOptions").val();
		var results = replaceWords(textBlock, targetWord, replacement, option);

		results === textBlock ?	$('p#errors').text("Nothing was changed. Please make sure your match options are correct.") : $('p#errors').text("");

		$("textarea#results").val(results);

		event.preventDefault();
	});

	$("form#copyPaste").submit(function(event) {
		var results = $("textarea#results").val();
		$("textarea#textBlock").val(results);

		event.preventDefault();
	});
});

