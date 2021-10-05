describe("filterLwords", function () {
    it("takes array of strings, and returns longest string at a given index",
        function () {
            assert.equal("ermiyas", filterLwords(["hli","lulu","ermiyas"], 4));
        });
});
describe("sum", function () {
    it("takes array of integers, and returns total sum",
        function () {
            assert.equal(10, sum([1,2,3,4]));
        });
});

describe("product", function () {
    it("takes array of integers, and returns product of integers",
        function () {
            assert.equal(24, product([1,2,3,4]));
        });
});
describe("reverseStr", function () {
    it("takes string, and returns reverse string",
        function () {
            assert.equal("anilh", reverseStr("hlina"));
        });
});

