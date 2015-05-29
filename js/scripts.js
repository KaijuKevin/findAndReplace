
//http://stackoverflow.com/questions/4371565/can-you-create-javascript-regexes-on-the-fly-using-string-variables
function findReplace(textBlock, targetWord, replacement) {
	return textBlock.replace( new RegExp(targetWord, 'gi'), replacement )
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function findReplaceMDN(fullS, oldS, newS) {
  return fullS.split(oldS).join(newS);
}

// Runs infinite loop
function myFindReplace(textBlock, targetWord, replacement) {
	var editBlock = textBlock;
	var indexes = [];
	while( editBlock.indexOf(targetWord) >= 0 ) {
		editBlock = editBlock.replace(targetWord, replacement);
	};
	return editBlock;
};

$(function(){
	$("form#findAndReplace").submit(function(event) {
		var textBlock = $("textarea#textBlock").val();
		var targetWord = $("input#targetWord").val();
		var replacement = $("input#replacement").val();
		var results = findReplaceSO(textBlock, targetWord, replacement);
		$("p#results").text(results);

		event.preventDefault();
	});
});

