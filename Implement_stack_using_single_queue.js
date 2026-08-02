let MyStack = function(){
    this.q=[];
}

 MyStack.prototype.push = function(x){
    this.q.push(x);
 }


 MyStack.prototype.pop = function(){
    let n = this.q.lenth();
    for(let i =0; i < n-1; i++){
        this.q.push(this.q.shift());
    }

    return this.q.shift();
 }

 MyStack.prototype.top = function(){
    let n = this.q.length();
    for(let i=0; i<n-1; i++){
        this.q.push(this.q.shift());
    }
    let front = this.q[0];
    this.q.push(this.q.shift());
    return front;
 }

 MyStack.prototype.empty = function(){
 return this.q.length()===0;
 }