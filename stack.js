class Stack
{
    constructor(){
        this.arr = [];
        this.count = 0;
    }
    //add element to to top of the stack
    push(element){
        this.arr[this.count] = element;
        console.log(element + " is added to index "+this.count)
        this.count += 1;
    }
    //delete the top most  element from the stack
    pop(){
        let delElem = this.arr[this.count - 1];
        this.arr.splice(this.count - 1,1)
        console.log(delElem + " deleted from the stack");
        this.count-=1;
    }
    //returns the top most element
    peek(){
        console.log("The top most element is "+ this.arr[this.count-1])
    }
    //check if the stack is empty
    isEmpty(){
        console.log(this.arr.length===0)
    }
    //Print the stack
    printStack(){
        for(let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i])
        }
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.peek();
stack.isEmpty();
stack.printStack();