function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    }else if(expected.constructor ==Array &&found.constructor ==Array){
          if (JSON.stringify(expected) == JSON.stringify(found)) {
            return "TEST SUCCEEDED";
          }
        }
    else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  
        /*-------------function to check vowel or not-------------*/
  function isVowel(c){
    if(c==='a' || c=='e' || c=='i' || c=='o' || c=='u' || c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
      return c;
    }
    return c;
  }
  console.log("Expected output of isVowel(a) is vowel a " + myFunctionTest('a',isVowel('a')));
  console.log("Expected output of isVowel(a) is vowel a " + myFunctionTest('a',isVowel('b')));
  
   /*------------ function to sum and multiply array of elements---------------*/
   function sum(e){
     if(e.length>0){
        let sum = 0;
        for(let n = 0; n < e.length; n++){
          sum+=e[n];
        }
        return sum;
     }
     
   }
   function multiply(e){
    let product = 1;
     for(let n = 0; n < e.length; n++){
       product*=e[n];
     }
     return product;
   }
  
   console.log("Expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(10,sum([1,2,3,4])));
   console.log("Expected output of sum(a[1,2,3,4,5]) is 15 " + myFunctionTest(15,sum([2,3,4,5])));
   console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24,multiply([1,2,3,4])));
   console.log("Expected output of multiply([1,2,3,4,5]) is 120 " + myFunctionTest(120,multiply([3,4,5])));
  
  
   /*----------Reverse String-----------*/
   function reverse(s){
     let r = "";
     for(let n = s.length-1; n >=0 ;n--){
       r+=s.charAt(n);
     }
     return r;
   }
   console.log("Expected output of reverse('giz ac') is ca zig " + myFunctionTest("ca zig",reverse("giz ac")));
   console.log("Expected output of reverse('giz') is zig " + myFunctionTest("zig",reverse("giza")));
  
  /*-----------find longest word-----------*/
  function findLongestWord(w){
    let longest = " ";
    for(let n = 0; n < w.length; n++){
      if(longest.length < w[n].length){
        longest = w[n];
      }
    }
    return longest;
  }
  console.log("Expected output of findLongestWord(['hlina','lulit','Ermiyas') is nati" + myFunctionTest("lulit",findLongestWord(['hlina','lulit','Ermiyas'])));
  
 /* a function filtering LongWords*/
  function filterLongWords(w,i){
    let r = [];
    for(let n = 0; n < w.length; n++){
      if(w[n].length > i){
        r.push(w[n]);
      }
    }
    return r;
  }
  console.log("Expected output of filterLongWords(['hlina','lulit','Ermiyas','nati']) is ['hlina','lulit'] " + myFunctionTest(["hlina","lulit"],filterLongWords(['hlina','lulit','Ermiyas','nati'],7)));

  
/*js fiddle 8*/
document.writeln("Results from JS Fiddle"+ "<br/>");
const a = [1,3,5,3,3]; 

const multiplyby3 = a.map(function(elem, i, array){
return elem * 3;
})
document.writeln(multiplyby3.toString() + "<br/>");


const equalTo3 = a.filter(function(elem, i, array){
return elem === 3;
})
document.writeln(equalTo3.toString() + "<br/>");

const productOfAll = a.reduce(function(prevValue, elem, i, array){
		return prevValue * elem;
})
document.writeln(productOfAll+ "<br/>");
