function findReplace(textBlock, targetWord, replacement) {
	var editBlock = textBlock;
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
		var results = findReplace(textBlock, targetWord, replacement);
		$("p#results").text(results);

		event.preventDefault();
	});
});