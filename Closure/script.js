// function counter(){
//     var counter=0;

//     function IncreaseCounter(){
//         return counter+=1;
//     };
//     return IncreaseCounter;
// }
// var counter=counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

//Q-2

let count=0;
(function(){
    if(count===0){
        let count=1;
        console.log(count);
    }
    console.log(count);
})();


//Q-3.

for(var i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },1000);
}

//Q-4

function outer(L){
    function inner(B){
        console.log(`Area of Rectagle:${L*B}`);
    }
    inner(10);
}
outer(20);


//Q-5

// var i=0;
function outer(){
    var i=0;
    function inner(){
        return i+=1;
    }
    return inner;
}

let outer1=outer();
console.log(outer1());
console.log(outer1());
console.log(outer1());
console.log(outer1());

//Q-6

// var a=12;
// (function (){
//     alert(a);
// })();

//Q-7.

// var a=10;
// var x=(function (){
//     var a=12;
//     return function (){
//         alert(a);
//     }
// })();
// x();

//Q-8.

var globalVar="xyz";

(function outerFunc(outerArg){
    var outer="a";

    (function innerFunc(innerArg){
        var innerVar="b";


        console.log(
            "outerArg="+outerArg+"\n"+
            "innerArg="+innerArg+"\n"+
            "outerVar="+outerArg+"\n"+
            "innerVar="+innerVar+"\n"+
            "globalVar="+globalVar);
    })(456);
})(123);