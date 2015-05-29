describe("replaceWords", function() {
	it("will only replace the first match", function() {
		expect(replaceWords("the cat with the cat", "cat", "mouse", "first")).to.equal("the mouse with the cat")
	});

	it("will replace the target word with a given string", function(){
		expect(replaceWords("cat", "cat", "dog", "substring")).to.equal("dog");
	});

	it("will replace an exact letter match with a given string", function(){
		expect(replaceWords("catatonic", "cata", "gin and ", "substring")).to.equal("gin and tonic");
	});

	it("will replace multiple matches", function() {
		expect(replaceWords("to too two", "t", "w", "substring")).to.equal("wo woo wwo");
	});

	it("will replace multiple matches in a large string", function() {
		var textBlock = "Style never met and those among great. At no or December sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but December delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.";
		expect(replaceWords(textBlock, "December", "september", "substring")).to.eq("Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.");
	});

	it("will not be case sensitive", function(){
		expect(replaceWords("Cat", "cat", "dog", "substring")).to.equal("dog");
	});

	it("will not run an infinite loop", function() {
		expect(replaceWords("to too two", "t", "tw", "substring")).to.equal("two twoo twwo");
	});

		it("will replace the target word with a given string", function(){
		expect(replaceWords("cat", "cat", "dog", "words")).to.equal("dog");
	});

	it("will replace multiple matches", function() {
		expect(replaceWords("chugga chugga", "chugga", "choo", "words")).to.equal("choo choo");
	});

	it("will replace multiple matches in a large string", function() {
		var textBlock = "Style never met and those among great. At no or December sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but December delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.";
		expect(replaceWords(textBlock, "December", "september", "words")).to.eq("Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.");
	});

	it("will only replace matches that are whole words", function(){
		expect(replaceWords("catatonic cat", "cat", "dog", "words")).to.equal("catatonic dog");
	});

	it("will ignore punctuation", function(){
		expect(replaceWords("catatonic cat.", "cat", "dog", "words")).to.equal("catatonic dog.");
	});
});