
function receivesAFunction(callback){
    console.log(callback())
}
function spy (){
   return 'Hello'
}
receivesAFunction(spy)


function returnsANamedFunction(){
    return function namedFunction(){
        console.log('Time to dance')
    }
}


function returnsAnAnonymousFunction() {
    return function() {
    console.log('hello')
    };
}