// sum
let numbersInArray=[1,2,3,4];
const totalSum = numbersInArray.reduce(function(initalSum,n){
  return initalSum + n; 
});
console.log("Total Sum is "+totalSum);


function sum(a){
  return numbersInArray.reduce(function(initalSum,n){
    return initalSum + n; 
  });
}

// product
 const totalProduct = numbersInArray.reduce(function(accumulator, element){
      return accumulator * element;
 });
 console.log("Total Product is "+totalProduct );


 function product(arr){
   return arr.reduce(function(accumulator, element){
    return accumulator * element;
});
 }


 /*----------Reverse String-----------*/
 let str = "hlina";
 let splitStr = str.split("");
 const reverseString = splitStr.reduce(function(rev,char){
      return char + rev; 
 });
 console.log("Reversed String "+reverseString);

function reverseStr(s){
return s.split("").reduce(function(rev,char){
  return char + rev; 
});
}





// filter long words
function filterLwords(a,i){
 const word= a.filter(function(str){
    return str.length>i;
    });
    return word;
}



let strings = ["hlina","lulit","suzy"];
let index = 4;

const fLW = strings.filter(function(str){
return str.length>4;
});

const filterLWord = strings.filter(s=>s.length>index);

console.log("Filter Strings more than n length "+filterLWord);
console.log("Filter Strings more than i length "+fLW);

