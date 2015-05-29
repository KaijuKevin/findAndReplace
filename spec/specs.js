describe("findReplace", function(){
	it("will replace a word with a given string", function(){
		expect(findReplace("cat", "cat", "dog")).to.equal("dog");
	});
});