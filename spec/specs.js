describe("findReplace", function(){
	it("will replace the target word with a given string", function(){
		expect(findReplace("cat", "cat", "dog")).to.equal("dog");
	});

	it("will replace an exact letter match with a given string", function(){
		expect(findReplace("catatonic", "cata", "gin and ")).to.equal("gin and tonic");
	});

	it("will replace multiple matches", function() {
		expect(findReplace("to too two", "t", "w")).to.equal("wo woo wwo");
	});

	it("will replace multiple matches in a large string", function() {
		var textBlock = "Style never met and those among great. At no or December sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but December delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.";
		expect(findReplace(textBlock, "December", "september")).to.eq("Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.");
	});
});