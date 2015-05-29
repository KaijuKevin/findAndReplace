function findReplace(textBlock, targetWord, replacement) {
	var editBlock = textBlock;
	while( editBlock.indexOf(targetWord) >= 0 ) {
		editBlock = editBlock.replace(targetWord, replacement);
	}
	return editBlock;
};