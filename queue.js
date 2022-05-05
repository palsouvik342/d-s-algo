class Queue
{
    constructor(){
        this.arr = [];
        this.count = 0;
    }
    //add a element to the queue
    push(element){
        this.arr[this.count] = element;
        console.log(element +" is added at index "+this.count);
        this.count += 1;
    }
    //Delete element in FIFO principle
    pop(){
        if(this.arr.length===0){
            console.log("Queue is empty");
        }
        else{
            let length = 0;
            let delElem = this.arr[length];
            this.arr.splice(length,1)
            console.log(delElem + " is deleted from the queue")
            length+=1;
        }
    }
    //retun the front element of the queue
    front(){
        if(this.arr.length===0){
            console.log("Queue is empty")
        }
        else{
            console.log("front element is " + this.arr[0])
        }
    }
    // return if the queue is empty or not
    isEmpty(){
        console.log(this.arr.length === 0)
    }
    // traverse the queue
    printQueue(){
        for(let i=0; i<this.arr.length; i++){
            console.log(this.arr[i] +" is at index - "+ i)
        }
    }
}
let queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
queue.printQueue();
queue.isEmpty();
queue.pop();
queue.front();
queue.pop();
queue.pop();
queue.isEmpty();
queue.pop();