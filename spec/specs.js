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

});