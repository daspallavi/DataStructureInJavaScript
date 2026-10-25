/**
 * bind is a function that exists on function prototype chain,
 * we use bind to create a new function, with the existing function
 * What it does is, it set the value of this.
 * 
 * 
 * 
 * 
 */


const villain = {name: "James"};
const anotherVillain = {name: "John"};

function showVillian(n1,n2,n3){
console.log(this.name);
}

Function.prototype.myBind = function( ...args){
  let obj = this;
  params = args.slice(1);

  return function(...args2){
obj.apply(args[0],[...params,...args2])
  }
};

const fn = showVillian.myBind(villain);
fn();

