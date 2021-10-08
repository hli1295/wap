String.prototype.filter=function(banned){
    return this.split(" ").filter(e=>!banned.includes(e)).reduce((acc,e)=>acc+e+" ","").trim();
}
Array.prototype.bubbleSort=function(){
    function swap(arr,i,j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    let copy=[];
    this.forEach(e=>copy.push(e));

    for(let i=0;i<copy.length;i++){
        for(let j=0;j<copy.length-i-1;j++){
            if(copy[j]>copy[j+1]){
                swap(copy,j,j+1);
            }
        }
    }
    return copy;
}


function Person(name){
    this.name=name;
}
Person.prototype.describe=function(){
    return `Hey, My name is ${this.name}!`;
}
function Teacher(name){
    this.name=name;
}
Teacher.prototype.__proto__=Person.prototype;
Teacher.prototype.teach=function(subject){
    return `${this.name} is teaching ${subject}`;
}
