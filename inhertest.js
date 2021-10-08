mocha.setup("bdd");
let assert = chai.assert;

describe("function banned word",function(){
    it("String object must have a filter method",function(){
        assert.notEqual(String.prototype.filter,undefined);
    })
    it("should return the string itself if the argument is empty",function(){
        let myString="blah blah blah";
        assert.equal(myString.filter(""),myString);
    })
    it("should return 'this house is nice!' when given 'This house is not nice!' with filter not",function(){
        let myString="this house is not nice!";
        assert.equal(myString.filter("not"),"this house is nice!");
    })
})

describe("bubble sort",function(){
    it("Array must have a bubleSort method",function(){
        assert.notEqual(Array.prototype.bubbleSort,undefined);
    })
    it("should return the string itself if the argument is in ascending order",function(){
        let arg=[1,2,3,4,5];
        assert.deepEqual(arg.bubbleSort(),arg);
    })
    it("should return 1,2,3,4 when given 4,3,2,1",function(){
        let arg=[4,3,2,1];
        assert.deepEqual(arg.bubbleSort(),[1,2,3,4])
    })
})
describe("test inheritance of teacher",function(){
    it("Teacher must have a method describe; to ensure it inherits from Person",function(){
        assert.notEqual(Teacher.prototype.describe,undefined);
    });
    it("must return valid string",function(){
        assert.equal(new Teacher("Mr X").teach("Javascript"),"Mr X is teaching Javascript");
    })
})
window.onload=function(){
    mocha.run();
}