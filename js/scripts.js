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

